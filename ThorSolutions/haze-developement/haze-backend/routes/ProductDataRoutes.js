// Import necessary modules
const express = require("express");
const router = express.Router();
const ProductDataController = require("../controllers/ProductDataController");
const ProductData = require("../models/ProductDataModel");
const authMiddleware = require("../middlewares/authMiddleware");

// Middleware to fetch a single product data by ID
router.param("id", async (req, res, next, id) => {
  let productData;
  try {
    productData = await ProductData.findById(id);
    if (!productData) {
      return res.status(404).json({ message: "Product data not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.productData = productData;
  next();
});

// Routes
router.get("/ProductData", ProductDataController.getAllProductData);
router.get("/ProductData/:id", ProductDataController.getProductDataById);

router.post("/ProductData", ProductDataController.createProductData);
router.patch("/ProductData/:id", ProductDataController.updateProductData);
router.delete("/ProductData/:id", ProductDataController.deleteProductData);

// Route to duplicate product data
router.post(
  "/ProductData/:id/duplicate",
  ProductDataController.duplicateProductData
); // Add this route


// Export router
module.exports = router;
