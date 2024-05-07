// routes/layerDataRoutes.js


const express = require('express');
const router = express.Router();
const layerDataController = require('../controllers/layerDataController');
const LayerData = require('../models/layerDataModel');
const authMiddleware = require('../middlewares/authMiddleware')

// Middleware to fetch a single layer data by ID
router.param('id', async (req, res, next, id) => {
	let layerData;
	try {
		layerData = await LayerData.findById(id);
		if (layerData == null) {
			return res.status(404).json({ message: 'Layer data not found' });
		}
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
	res.layerData = layerData;
	next();
});

// Routes
router.get('/layerdata', layerDataController.getAllLayerData);
router.get('/layerdata/:id', layerDataController.getLayerDataById);
router.post('/layerdata',  layerDataController.createLayerData);
router.patch('/layerdata/:id',  layerDataController.updateLayerData);
router.delete('/layerdata/:id',  layerDataController.deleteLayerData);

module.exports = router;
