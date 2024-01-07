
const userModel = require('../models/user')
exports.registerController = async (req, res) => {
	try {
		const { email, password } = req.body;

		// Validation
		if (!email) {
			return res.status(400).json({ success: false, message: 'Email is required' });
		}
		if (!password || password.length < 6) {
			return res.status(400).json({ success: false, message: 'Password is required and should be at least 6 characters' });
		}

		const existingUser = await userModel.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ success: false, message: 'Email already registered. Please login.' });
		}

		const user = await userModel.create({ email, password });
		const token = user.createJWT();

		res.status(201).json({
			success: true,
			message: 'User created successfully',
			user: { email: user.email },
			token,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};

exports.loginController = async (req, res, next) => {
	const { email, password } = req.body;
	//validation
	if (!email || !password) {
		next("Please Provide All Fields");
	}
	//find user by email
	const user = await userModel.findOne({ email }).select("+password");
	if (!user) {
		next("Invalid Useraname or password");
	}
	//compare password
	const isMatch = await user.comparePassword(password);
	if (!isMatch) {
		next("Invalid Useraname or password");
	}
	user.password = undefined;
	const token = user.createJWT();
	res.status(200).json({
		success: true,
		message: "Login SUccessfully",
		user,
		token,
	});
};
