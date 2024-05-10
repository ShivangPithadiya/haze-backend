/* eslint-disable no-undef */
const EmailInvite = require('../models/inviteModel');
const nodemailer = require('nodemailer');
const { randomBytes } = require('crypto');

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'jiozindagichanchal@gmail.com',
		pass: 'jjpg ryat hqfc tlqg'
	}
});

function generateRandomPassword(length) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
	const passwordArray = [];

	while (passwordArray.length < length) {
		const randomIndex = randomBytes(1)[0] % characters.length;
		passwordArray.push(characters.charAt(randomIndex));
	}

	return passwordArray.join('');
}

async function inviteUserController(req, res) {
	try {
		const { email } = req.body;

		const randomPassword = generateRandomPassword(8);
		console.log("pass:", randomPassword);

		const newUser = new EmailInvite({ email, password: randomPassword });
		await newUser.save();

		const mailOptions = {
			from: 'jiozindagichanchal@gmail.com',
			to: email,
			subject: 'Invitation to join Haze',
			text: `Hello! You have been invited to join our team at Haze. Your login credentials are:\nEmail: ${email}\nPassword: ${randomPassword}`
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log('Error in sending email:', error);
				res.status(500).json({ error: 'Error sending email' });
			} else {
				console.log('Email sent:', info.response);
				res.status(201).json({ message: 'Invitation sent successfully' });
			}
		});
	} catch (error) {
		console.log('Error:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

module.exports = {
	inviteUserController
};
