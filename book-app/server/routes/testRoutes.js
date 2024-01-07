// testRouter.js
const express = require('express');
const router = express.Router();
const { testPostController } = require('../controllers/testController');
const userAuth = require('../middlewares/authMiddleware');

// router.post('/test-post', userAuth, testPostController);
router.post('/test-post', userAuth, (req, res) => testPostController(req, res));
module.exports = router;
