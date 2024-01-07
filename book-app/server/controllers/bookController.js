const Book = require('../models/book');
const User = require('../models/user');

// Publish a new book
exports.publishBook = async (req, res) => {
	try {
		const { title } = req.body;

		// Assume user information is stored in req.user after authentication middleware
		const publishedBy = req.user._id;

		const newBook = new Book({ title, publishedBy });
		await newBook.save();

		res.status(201).json({ message: 'Book published successfully', book: newBook });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

// Search for books by title
exports.searchBooks = async (req, res) => {
	try {
		const { title } = req.query;

		const books = await Book.find({ title });

		res.status(200).json({ books });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

// Unpublish a book
exports.unpublishBook = async (req, res) => {
	try {
		const { bookId } = req.params;

		// Assuming req.user._id is the ID of the logged-in user after authentication middleware
		const userId = req.user._id;

		const book = await Book.findById(bookId);

		if (!book) {
			return res.status(404).json({ message: 'Book not found' });
		}

		if (String(book.publishedBy) !== String(userId)) {
			return res.status(403).json({ message: 'You do not have permission to unpublish this book' });
		}

		book.isPublished = false;
		await book.save();

		res.status(200).json({ message: 'Book unpublished successfully', book });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

// Get a list of books published by the current user
exports.getUserBooks = async (req, res) => {
	try {
		// Assuming req.user._id is the ID of the logged-in user after authentication middleware
		const userId = req.user._id;

		const userBooks = await Book.find({ publishedBy: userId });

		res.status(200).json({ books: userBooks });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};

// Get a list of all published books
exports.getAllPublishedBooks = async (req, res) => {
	try {
		const publishedBooks = await Book.find({ isPublished: true });

		res.status(200).json({ books: publishedBooks });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal server error' });
	}
};
