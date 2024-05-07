/* eslint-disable no-undef */
const User = require('../models/userModel');
// Middleware to check if the user is a super admin
const checkSuperAdmin = async (req, res, next) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(404).json({ success: false, message: 'User not found' });
		}

		if (user.userType !== 'super-admin') {
			return res.status(403).json({ success: false, message: 'Unauthorized: Insufficient privileges' });
		}

		next(); // User is a super admin, proceed to the next middleware
	} catch (error) {
		console.error('Error checking super admin:', error);
		res.status(500).json({ success: false, message: 'Internal server error' });
	}
};
module.exports = checkSuperAdmin;