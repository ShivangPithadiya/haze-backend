const ProductData = require("../models/ProductDataModel");

// Get all layer data
const getAllProductData = async (req, res) => {
  try {
    const productData = await ProductData.find();
    res.json(productData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get a single layer data by ID
const getProductDataById = async (req, res) => {
  res.json(res.productData);
};

// Create a new layer data
const createProductData = async (req, res) => {
  const productData = new ProductData(req.body);
  try {
    const newProductData = await productData.save();
    res.status(201).json(newProductData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing layer data
// Update an existing layer data
const updateProductData = async (req, res) => {
  //update product data
  try {
    const productData = await ProductData.findById(req.params.id);
    
    if (productData) 
      {
        const newData = req.body; // Assuming the data is sent in the request body
        const data = await ProductData
          .findByIdAndUpdate(req.params.id, newData, { new: true });
        res.status(201).json(data);
        
      }
      else {
        res.status(404).json({ message: "Product data not found" });
      
      }
    
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const duplicateProductData = async (req, res) => {
  try {
    // Retrieve the product data to duplicate by ID
    const productDataToDuplicate = await ProductData.findById(req.params.id);
    if (!productDataToDuplicate) {
      return res.status(404).json({ message: "Product data not found" });
    }

    // Create a new product data object based on the existing one
    const duplicatedProductData = new ProductData({
      ...productDataToDuplicate.toObject(),
      _id: undefined, // Remove the ID to create a new entry
      // Optionally, modify any other fields as needed before saving
    });

    // Save the duplicated product data
    const newProductData = await duplicatedProductData.save();

    // Respond with the duplicated product data
    res.status(201).json(newProductData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete a layer data
const deleteProductData = async (req, res) => {
  try {
    await res.productData.remove();
    res.json({ message: "Layer data deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getAllProductData,
  getProductDataById,
  createProductData,
  updateProductData,
  duplicateProductData,
  deleteProductData,
};
