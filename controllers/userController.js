/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const multer = require('multer')
const path = require('path')
const JWT = require("jsonwebtoken");
const nodemailer = require('nodemailer');

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

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'jiozindagichanchal@gmail.com',
		pass: 'jjpg ryat hqfc tlqg'
	}
});


const addProfileDetails = async (req, res) => {
	try {
		const { userId, name, city, state, country, address, phone, status, password } = req.body;
		let profileImage = '';
		if (req.file) {
			profileImage = req.file.path
		}
		const user = await userModel.findById(userId);

		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}
		// user.city = city;
		// user.state = state;
		// user.country = country;
		// user.address = address;
		// user.status = status;
		// user.profileImage = profileImage;

		// await user.save();
		if (name) user.name = name;
		if (city) user.city = city;
		if (state) user.state = state;
		if (country) user.country = country;
		if (address) user.address = address;
		if (phone) user.phone = phone;
		if (password) {
			const salt = bcrypt.genSaltSync(10);
			const hashedPassword = await bcrypt.hash(password, salt);
			user.password = hashedPassword;
		}
		if (profileImage) user.profileImage = profileImage;

		await user.save();
		// Send email notification after updating profile
		const mailOptions = {
			from: 'jiozindagichanchal@gmail.com',
			to: user.email,
			subject: 'Profile Update Notification',
			text: `Hello ${user.name}, Your profile has been updated successfully.`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.error('Error in sending email:', error);
			} else {
				console.log('Email sent:', info.response);
			}
		});

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

//SUPER-ADMIN PROFILE

const getAllStoreOwnersController = async (req, res) => {
	try {
		// Check if the user is a super-admin
		// if (req.user.userType !== 'super-admin') {
		//     return res.status(403).json({ success: false, message: "Access forbidden" });
		// }

		// Find all users with userType 'store-owner'
		const storeOwners = await userModel.find({ userType: 'store-owner' });

		res.status(200).json({ success: true, storeOwners: storeOwners });
	} catch (error) {
		console.error('Error in getting list of store-owners:', error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}

//SUPER ADMIN  MANAGER PROFILE
const createSuperAdminManagerController = async (req, res) => {
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
			name, email, userType: 'super-admin-manager', password: password
		});
		await newUser.save();

		res.status(201).json({
			success: true,
			message: "Super admin manager created successfully",
			user: {
				_id: newUser._id,
				name: newUser.name,
				email: newUser.email,
				userType: newUser.userType
				// shopifyapikey: newUser.shopifyapikey,
				// shopifyaccesstoken: newUser.shopifyaccesstoken,
				// shopifystoredomain: newUser.shopifystoredomain

			}
		});
	} catch (error) {
		console.error('Error in createSuperAdminController:', error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};
const getListSuperAdminManagerController = async (req, res) => {
	try {
		// Retrieve all users from the database with userType 'super-admin-manager'
		const users = await userModel.find({ userType: 'store-owner-manager' });

		res.status(200).json({ success: true, users: users });
	} catch (error) {
		console.error('Error in super admin manager controller:', error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};
const updateSuperAdminManagerStatusController = async (req, res) => {
	try {
		const { userId } = req.params;
		const { status } = req.body;

		// // Check if the user is a super-admin
		// if (req.user.userType !== 'super-admin') {
		// 	return res.status(403).json({ success: false, message: "Access forbidden" });
		// }

		// Find and update the status of super-admin-manager
		const updatedUser = await userModel.findByIdAndUpdate(userId, { status }, { new: true });

		res.status(200).json({ success: true, message: "Status updated successfully", user: updatedUser });
	} catch (error) {
		console.error('Error in updating status of super-admin-manager:', error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

//STORE OWNER MANAGER PROFILE
const createStoreOwnerManagerController = async (req, res) => {
	try {
		const { email, name, password, confirmPassword, shopifyapikey, shopifyaccesstoken, shopifystoredomain } = req.body;

		// Validation
		if (!email || !password || !name || !confirmPassword || !shopifyapikey || !shopifyaccesstoken || !shopifystoredomain) {
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

		// Create new store owner manager
		const newUser = new userModel({
			name, email, userType: 'store-owner-manager', password: password, shopifyapikey, shopifyaccesstoken, shopifystoredomain,
		});
		await newUser.save();

		res.status(201).json({
			success: true,
			message: "Store owner manager created successfully",
			user: {
				_id: newUser._id,
				name: newUser.name,
				email: newUser.email,
				userType: newUser.userType,
				shopifyapikey: newUser.shopifyapikey,
				shopifyaccesstoken: newUser.shopifyaccesstoken,
				shopifystoredomain: newUser.shopifystoredomain

			}
		});
	} catch (error) {
		console.error('Error in store owner manager controller:', error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};

const getListStoreOwnerManagerController = async (req, res) => {
	try {
		// Retrieve all users from the database with userType 'store-owner-manager'
		const users = await userModel.find({ userType: 'store-owner-manager' });

		res.status(200).json({ success: true, users: users });
	} catch (error) {
		console.error('Error in store owner manager list controller:', error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};
const updateStoreOwnerManagerStatusController = async (req, res) => {
	try {
		const { userId } = req.params;
		const { status } = req.body;

		// Check if the user is a store-owner
		// if (req.user.userType !== 'store-owner') {
		// 	return res.status(403).json({ success: false, message: "Access forbidden" });
		// }

		// Find and update the status of store-owner-manager
		const updatedUser = await userModel.findByIdAndUpdate(userId, { status }, { new: true });

		res.status(200).json({ success: true, message: "Status updated successfully", user: updatedUser });
	} catch (error) {
		console.error('Error in updating status of store-owner-manager:', error);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
};


module.exports = {
	addProfileDetails,
	getUserProfileController,
	getUserController,
	updateUserController,
	getAllStoreOwnersController,
	createSuperAdminManagerController,
	getListSuperAdminManagerController,
	updateSuperAdminManagerStatusController,
	createStoreOwnerManagerController,
	getListStoreOwnerManagerController,
	updateStoreOwnerManagerStatusController,
	updatePasswordController,
	resetPasswordController,
	deleteProfileController,

};