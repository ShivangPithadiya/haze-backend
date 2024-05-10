/* eslint-disable no-undef */
const mongoose = require('mongoose');

const inviteSchema = new mongoose.Schema({
	email: { type: String, unique: true },
	password: String
});

module.exports = mongoose.model('EmailInvite', inviteSchema);
