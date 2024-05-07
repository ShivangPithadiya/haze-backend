/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const multer = require('multer')
const path = require('path')
const JWT = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET || '12345';
// Multer configuration for file upload
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/profileImages'); // Set the destination folder for profile images
	},
	filename: function (req, file, cb) {
		// Set the filename to include the user's ID and a timestamp
		const userId = req.params.id;
		const timestamp = Date.now();
		const extension = path.extname(file.originalname);
		cb(null, `${userId}-${timestamp}${extension}`);
	}
});

const upload = multer({ storage: storage });

const addProfileDetails = async (req, res) => {
	try {
		const { userId, city, state, country, address, status } = req.body;
		let profileImage = '';
		if (req.file) {
			profileImage = req.file.path
		}
		const user = await userModel.findById(userId);

		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}
		user.city = city;
		user.state = state;
		user.country = country;
		user.address = address;
		user.status = status;
		user.profileImage = profileImage;

		await user.save();
		res.status(200).json({ success: true, message: "Profile details updated successfully", user });
	} catch (error) {
		console.error("Error in addProfileDetails:", error);
		res.status(500).json({ success: false, message: "Internal server error", error });
	}
};
//  GET USER PROFILE
const getUserProfileController = async (req, res) => {
	try {
		// Find all users
		const userList = await userModel.find();

		// Check if any users exist
		if (!userList || userList.length === 0) {
			return res.status(404).json({
				success: false,
				message: "No users found",
			});
		}

		// Hide sensitive information
		userList.forEach(user => {
			user.password = undefined;
		});

		// Respond with the list of users
		res.status(200).json({
			success: true,
			message: "User list retrieved successfully",
			users: userList,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: "Error retrieving user list",
			error: error,
		});
	}

};
// GET USER INF
const getUserController = async (req, res) => {
	try {
		// Find user by ID
		const user = await userModel.findById(req.params.id);

		// Validation
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}

		// Hide sensitive information
		user.password = undefined;

		// Respond with user profile
		res.status(200).json({
			success: true,
			message: "User retrieved successfully",
			user,
		});
	} catch (error) {
		console.error("Error in getUserController:", error);
		res.status(500).json({
			success: false,
			message: "Error retrieving user",
			error,
		});
	}
};

// UPDATE USER
const updateUserController = async (req, res) => {
	try {
		// find user
		const user = await userModel.findById({ _id: req.body.id });
		//validation
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "user not found",
			});
		}
		//update
		const { userName, address, phone } = req.body;
		if (userName) user.userName = userName;
		if (address) user.address = address;
		if (phone) user.phone = phone;
		//save user
		await user.save();
		res.status(200).send({
			success: true,
			message: "USer Updated SUccessfully",
		});
	} catch (error) {
		// console.log(erorr);
		res.status(500).send({
			success: false,
			message: "Error In Udpate Userr API",
			error,
		});
	}
};

// UPDATE USER PASSWORR
const updatePasswordController = async (req, res) => {
	try {
		//find user
		const user = await userModel.findById({ _id: req.body.id });
		//valdiation
		if (!user) {
			return res.status(404).send({
				success: false,
				message: "Usre Not Found",
			});
		}
		// get data from user
		const { oldPassword, newPassword } = req.body;
		if (!oldPassword || !newPassword) {
			return res.status(500).send({
				success: false,
				message: "Please Provide Old or New PasswOrd",
			});
		}
		//check user password  | compare password
		const isMatch = await bcrypt.compare(oldPassword, user.password);
		if (!isMatch) {
			return res.status(500).send({
				success: false,
				message: "Invalid old password",
			});
		}
		//hashing password
		var salt = bcrypt.genSaltSync(10);
		const hashedPassword = await bcrypt.hash(newPassword, salt);
		user.password = hashedPassword;
		await user.save();
		res.status(200).send({
			success: true,
			message: "Password Updated!",
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Error In Password Update API",
			error,
		});
	}
};

// RESET PASSWORd
const resetPasswordController = async (req, res) => {
	try {
		const { email, newPassword, answer } = req.body;
		if (!email || !newPassword || !answer) {
			return res.status(500).send({
				success: false,
				message: "Please Privide All Fields",
			});
		}
		const user = await userModel.findOne({ email, answer });
		if (!user) {
			return res.status(500).send({
				success: false,
				message: "User Not Found or invlaid answer",
			});
		}
		//hashing password
		var salt = bcrypt.genSaltSync(10);
		const hashedPassword = await bcrypt.hash(newPassword, salt);
		user.password = hashedPassword;
		await user.save();
		res.status(200).send({
			success: true,
			message: "Password Reset SUccessfully",
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "eror in PASSWORD RESET API",
			error,
		});
	}
};

// DLEETE PROFILE ACCOUNT
const deleteProfileController = async (req, res) => {
	try {
		await userModel.findByIdAndDelete(req.params.id);
		return res.status(200).send({
			success: true,
			message: "Your account has been deleted",
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: "Erorr In Delete Profile API",
			error,
		});
	}
};

// const createSuperAdminController = async (req, res) => {
// 	try {
// 		const { email, name, password, confirmPassword } = req.body;

// 		// Check if requester is a super admin
// 		const decoded = JWT.verify(req.header("Authorization"), secretKey);
// 		if (decoded.userType !== 'super-admin') {
// 			return res.status(403).json({ success: false, message: "Access forbidden" });
// 		}

// 		// Validation
// 		if (!email || !password || !name || !confirmPassword) {
// 			return res.status(400).json({ success: false, message: "Please provide all required fields" });
// 		}

// 		if (password !== confirmPassword) {
// 			return res.status(400).json({ success: false, message: 'Passwords do not match' });
// 		}

// 		// Check if user already exists
// 		const existingUser = await userModel.findOne({ email });
// 		if (existingUser) {
// 			return res.status(400).json({ success: false, message: 'Email already registered' });
// 		}

// 		// Hash password
// 		const hashedPassword = await bcrypt.hash(password, 10);

// 		// Create new super admin
// 		const user = await userModel.create({
// 			name, email, userType: 'superadmin', password: hashedPassword
// 		});

// 		res.status(201).json({
// 			success: true,
// 			message: "Super admin created successfully",
// 			user: {
// 				_id: user._id,
// 				name: user.name,
// 				email: user.email,
// 				userType: user.userType,
// 			}
// 		});
// 	} catch (error) {
// 		console.error('Error in createSuperAdminController:', error);
// 		res.status(500).json({ success: false, message: "Internal server error" });
// 	}
// };

const createSuperAdminController = async (req, res) => {
	try {
		const { email, name, password, confirmPassword } = req.body;

		// Validation
		if (!email || !password || !name || !confirmPassword) {
			return res.status(400).json({ success: false, message: "Please provide all required fields" });
		}

		if (password !== confirmPassword) {
			return res.status(400).json({ success: false, message: 'Passwords do not match' });
		}

		// Check if user already exists
		let existingUser = await userModel.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ success: false, message: 'Email already registered' });
		}

		// Create new super admin
		const newUser = new userModel({
			name, email, userType: 'super-admin' || 'retailer', password: password
		});
		await newUser.save();

		res.status(201).json({
			success: true,
			message: "Super admin created successfully",
			user: {
				_id: newUser._id,
				name: newUser.name,
				email: newUser.email,
				userType: newUser.userType,
			}
		});
	} catch (error) {
		console.error('Error in createSuperAdminController:', error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

const getListRetailerController = async (req, res) => {
	try {
		// Check if the user is a retailer
		// if (req.user.userType !== 'retailer') {
		// 	return res.status(403).json({ success: false, message: "Access forbidden" });
		// }

		// Retrieve all users from the database
		const users = await userModel.find();

		// Filter users based on userType
		// const retailerUsers = users.filter(user => user.userType === 'retailer');

		res.status(200).json({ success: true, users: users });
	} catch (error) {
		console.error('Error in getListRetailerController:', error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

module.exports = {
	addProfileDetails,
	getUserProfileController,
	getUserController,
	updateUserController,
	createSuperAdminController,
	getListRetailerController,
	updatePasswordController,
	resetPasswordController,
	deleteProfileController,

};