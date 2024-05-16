

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

		// Generate a unique token for invitation link
		const token = generateRandomPassword(16); // Adjust length as needed
		const inviteLink = `https://haze.staging.app/register?token=${token}`; // Assuming token is used in the registration URL

		const mailOptions = {
			from: 'jiozindagichanchal@gmail.com',
			to: email,
			subject: 'Invitation to join Haze',
			html: `
				<p>Hello! You have been invited to join our team at Haze.</p>
				<p>Your login credentials are:</p>
				<ul>
					<li>Email: ${email}</li>
					<li>Password: ${randomPassword}</li>
				</ul>
				<p>Click <a href="${inviteLink}">here</a> to register.</p>
			`
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log('Error in sending email:', error);
				res.status(500).json({ error: 'Error sending email' });
			} else {
				console.log('Email sent:', info.response);
				// Send invite link along with the response
				res.status(201).json({ message: 'Invitation sent successfully', inviteLink: inviteLink });
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
