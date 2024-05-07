// // src/models/editedImageModel.js
// const mongoose = require('mongoose');

// const editedImageSchema = new mongoose.Schema({
// 	imageUrl: String,
// 	editedImageUrl: String,
// });

// const EditedImage = mongoose.model('EditedImage', editedImageSchema);

// module.exports = EditedImage;
// // 

const mongoose = require('mongoose');

// Model for EditedImage
const editedImageSchema = new mongoose.Schema({
	imageUrl: { type: String, required: true },
	editedImageUrl: { type: String, required: true },
});

const EditedImage = mongoose.model('EditedImage', editedImageSchema);

module.exports = EditedImage;