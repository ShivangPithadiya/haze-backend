/* eslint-disable no-undef */
// authRoutes.js

const express = require("express");
const {
	registerController,
	loginController,
	resetPasswordRequest,

	resetPassword,
	updatePassword
} = require("../controllers/authControllers");

const verifyToken = require("../middlewares/authMiddleware")
const checkSuperAdmin = require('../middlewares/checkSuperAdmin')
const router = express.Router();

// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// Reset Password Request || POST
router.post('/reset-password-request', resetPasswordRequest);

// Reset Password || POST
router.post('/reset-password', resetPassword);

// Update Password || PUT
router.put('/update-password', verifyToken, updatePassword);

// router.post('/superadmin/create', checkSuperAdmin, verifyToken, createSuperAdminController)
// router.post('/superadmin/create', createSuperAdminController)

module.exports = router;
