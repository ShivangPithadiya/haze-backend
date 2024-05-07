const LayerData = require('../models/layerDataModel');

// Get all layer data
const getAllLayerData = async (req, res) => {
	try {
		const layerData = await LayerData.find();
		res.json(layerData);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

// Get a single layer data by ID
const getLayerDataById = async (req, res) => {
	res.json(res.layerData);
};

// Create a new layer data
const createLayerData = async (req, res) => {
	const layerData = new LayerData(req.body);
	try {
		const newLayerData = await layerData.save();
		res.status(201).json(newLayerData);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Update an existing layer data
const updateLayerData = async (req, res) => {
	if (req.body.layerId != null) {
		res.layerData.layerId = req.body.layerId;
	}
	// Update other properties similarly...

	try {
		const updatedLayerData = await res.layerData.save();
		res.json(updatedLayerData);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

// Delete a layer data
const deleteLayerData = async (req, res) => {
	try {
		await res.layerData.remove();
		res.json({ message: 'Layer data deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = {
	getAllLayerData,
	getLayerDataById,
	createLayerData,
	updateLayerData,
	deleteLayerData,
};