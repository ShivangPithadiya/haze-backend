// bookRoutes.js
const express = require('express');
const router = express.Router();
const { publishBook, searchBooks, unpublishBook, getUserBooks, getAllPublishedBooks } = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

// router.post('/publish', authMiddleware, publishBook);
router.post('/publish', authMiddleware, (req, res) => publishBook(req, res));
router.get('/search', authMiddleware, searchBooks);
router.put('/unpublish/:bookId', authMiddleware, unpublishBook);
router.get('/user', authMiddleware, getUserBooks);
router.get('/published', authMiddleware, getAllPublishedBooks);

module.exports = router;
