/* eslint-disable no-undef */
const express = require('express');
const inviteController = require('../controllers/inviteController')
const router = express.Router();
router.post('/invite', inviteController.inviteUserController)
module.exports = router;
