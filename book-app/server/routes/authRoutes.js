// authRoutes.js
const express = require('express');
const router = express.Router();
const { registerController, loginController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// router.post('/register', registerController);
router.post('/register', (req, res) => registerController(req, res));
router.post('/login', loginController);

module.exports = router;
