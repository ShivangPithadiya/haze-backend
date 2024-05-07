// const express = require("express");

// const multer = require('multer');
// const imageController = require('../controllers/imageController')
// const authMiddleware = require('../middlewares/authMiddleware')
// const router = express.Router();
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// router.post('/save', upload.single('editedImage'), authMiddleware, imageController.saveImage); // Assuming saveImage is the callback function for saving images
// router.get('/getAll', authMiddleware, imageController.getAllImages); // Assuming getAllImages is the callback function for getting all images

// module.exports = router;


const express = require("express");
const multer = require('multer');
const imageController = require('../controllers/imageController');
const verifyToken = require('../middlewares/authMiddleware');
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Save image route
router.post('/save', upload.single('editedImage'), verifyToken, imageController.saveImage);

// Get all images route
router.get('/getAll', verifyToken, imageController.getAllImages);

module.exports = router;
