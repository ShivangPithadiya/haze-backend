/* eslint-disable no-undef */
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || '12345';
const generateToken = (userId, userType) => {
  return JWT.sign({ userId, userType }, secretKey, { expiresIn: '1h' })
}
// REGISTER
const registerController = async (req, res) => {
  try {
    const {
      name,
      email,
      userType,
      password,
      confirmPassword,
      shopifyapikey,
      shopifyaccesstoken,
      shopifystoredomain,
    } = req.body;
    //validation
    if (!email || !password || !name || !confirmPassword ||  !shopifyapikey || !shopifyaccesstoken || !shopifystoredomain) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }
    // chekc user
    const exisiting = await userModel.findOne({ email });
    if (exisiting) {
      return res.status(500).send({
        success: false,
        message: "Email Already Registerd please Login",
      });
    }
    //hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create new user
    console.log("body",shopifystoredomain)
    const user = await userModel.create({
      email,
      name,
      userType,
      password: hashedPassword,
      shopifyapikey,
      shopifyaccesstoken,
      shopifystoredomain,
    });
    res.status(201).send({
      success: true,
      message: "Successfully Registered",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Register API",
      error,
    });
  }
};
// LOGIN
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Please provide email and password" });
    }
    // Check if user exists
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    // Check if the user is a super admin
    if (user.userType === 'super-admin') {
      // Hardcoded super admin credentials for testing
      if (email === "superadmin.haze@gmail.com" && password === "haze@123") {
        console.log("superadmin")
        // Password validation
        const token = generateToken(user._id, user.userType);
        res.status(200).header('Authorization', token).json({
          success: true,
          message: "Login successful",
          token,
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            userType: user.userType,
            shopifystoredomain:user.shopifystoredomain,
            shopifyaccesstoken: user.shopifyaccesstoken
          }
        })
      }
    } else {
      // Regular user login
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
    }
    const token = generateToken(user._id, user.userType);
    res
      .status(200)
      .header("Authorization", token)
      .json({
        success: true,
        message: "Login successful",
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          userType: user.userType,
          shopifystoredomain: user.shopifystoredomain,
          shopifyaccesstoken: user.shopifyaccesstoken,
        },
      });
  } catch (error) {
    console.error('Error in loginController:', error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
// CREATE SUPER ADMIN
const createSuperAdminController = async (req, res) => {
  try {
    const { email, name, password, confirmPassword } = req.body;
    // Check if requester is a super admin
    const decoded = JWT.verify(req.header("Authorization"), secretKey);
    if (decoded.userType !== 'super-admin') {
      return res.status(403).json({ success: false, message: "Access forbidden" });
    }
    // Validation
    if (!email || !password || !name || !confirmPassword) {
      return res.status(400).json({ success: false, message: "Please provide all required fields" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }
    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create new super admin
    const user = await userModel.create({
      name, email, userType: 'superadmin', password: hashedPassword
    });
    res.status(201).json({
      success: true,
      message: "Super admin created successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        shopifystoredomain: user.shopifystoredomain,
        shopifyaccesstoken: user.shopifyaccesstoken,
      },
    });
  } catch (error) {
    console.error('Error in createSuperAdminController:', error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
const resetPasswordRequest = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    const resetToken = JWT.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    user.resetToken = resetToken;
    user.resetTokenExpiration = Date.now() + 3600000;
    await user.save();
    const resetLink = `http://localhost:3000/reset-password/${resetToken}`;
    const emailText = `Click on the link to reset your password: ${resetLink}`;
    await sendEmail(user.email, 'Password Reset Request', emailText);
    res.status(200).json({ success: true, message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error('Error in resetPasswordRequest:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}
const resetPassword = async (req, res) => {
  try {
    const { resetToken, newPassword, confirmNewPassword } = req.body;
    const user = await userModel.findOne({
      resetToken,
      resetTokenExpiration: { $gt: Date.now() }, // Check if token is still valid
    });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid or expired reset token' });
    }
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();
    res.status(200).json({ success: true, message: 'Password reset successful' });
  } catch (error) {
    console.error('Error in resetPassword:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
const updatePassword = async (req, res) => {
  try {
    const { userId, currentPassword, newPassword, confirmNewPassword } = req.body;
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Current password is incorrect' });
    }
    if (newPassword !== confirmNewPassword) {
      return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error in updatePassword:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
module.exports = { registerController, loginController, createSuperAdminController, resetPasswordRequest, resetPassword, updatePassword };