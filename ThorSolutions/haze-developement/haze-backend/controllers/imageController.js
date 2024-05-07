// // src/controllers/editedImageController.js
// const EditedImage = require('../models/imageModel');

// exports.saveImage = async (req, res) => {
// 	const { imageUrl, editedImageUrl } = req.body;

// 	try {
// 		const newEditedImage = new EditedImage({ imageUrl, editedImageUrl });
// 		await newEditedImage.save();


// 		res.status(200).json({
// 			success: true,
// 			message: 'Image saved successfully',
// 			newEditedImage: {
// 				_id: newEditedImage._id,
// 				imageUrl: newEditedImage.imageUrl,
// 				editedImageUrl: newEditedImage.editedImageUrl,
// 				createdAt: newEditedImage.createdAt, // Assuming you have a createdAt field in your schema
// 			},
// 		});
// 	} catch (error) {
// 		console.error('Error saving image:', error);
// 		res.status(500).json({ success: false, message: 'Internal Server Error' });
// 	}
// };

// exports.getAllImages = async (req, res) => {
// 	try {
// 		const allEditedImages = await EditedImage.find();
// 		res.status(200).json({ success: true, data: allEditedImages });
// 	} catch (error) {
// 		console.error('Error fetching edited images:', error);
// 		res.status(500).json({ success: false, message: 'Internal Server Error' });
// 	}
// };


const EditedImage = require('../models/imageModel');

exports.saveImage = async (req, res) => {
	// Destructure imageUrl and editedImageUrl from req.file
	const { originalname, buffer } = req.file;
	const imageUrl = 'generatedImageUrl'; // Replace with your logic for generating imageUrl
	const editedImageUrl = `data:image/jpeg;base64,${buffer.toString('base64')}`;

	try {
		const newEditedImage = new EditedImage({ imageUrl, editedImageUrl });
		await newEditedImage.save();

		res.status(200).json({
			success: true,
			message: 'Image saved successfully',
			newEditedImage: {
				_id: newEditedImage._id,
				imageUrl: newEditedImage.imageUrl,
				editedImageUrl: newEditedImage.editedImageUrl,
				createdAt: newEditedImage.createdAt, // Assuming you have a createdAt field in your schema
			},
		});
	} catch (error) {
		console.error('Error saving image:', error);
		res.status(500).json({ success: false, message: 'Internal Server Error' });
	}
};

exports.getAllImages = async (req, res) => {
	try {
		const allEditedImages = await EditedImage.find();
		res.status(200).json({ success: true, data: allEditedImages });
	} catch (error) {
		console.error('Error fetching edited images:', error);
		res.status(500).json({ success: false, message: 'Internal Server Error' });
	}
};
