const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: { type: String, required: true },
	publishedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	isPublished: { type: Boolean, default: false },
});

module.exports = mongoose.model('Book', bookSchema);
