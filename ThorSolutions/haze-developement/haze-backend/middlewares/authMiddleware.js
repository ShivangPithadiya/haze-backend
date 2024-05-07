/* eslint-disable no-undef */
// authMiddleware.js

const JWT = require("jsonwebtoken");


// Middleware to verify authorization token
const verifyToken = async (req, res, next) => {
	try {
		const token = req.headers["authorization"].split(" ")[1];
		if (!token) {
			return res.status(401).send({ success: false, message: "Unauthorized: Token not provided" });
		}
		const decoded = JWT.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		console.error(error);
		res.status(401).send({ success: false, message: "Unauthorized: Invalid token" });
	}
};
module.exports = verifyToken;