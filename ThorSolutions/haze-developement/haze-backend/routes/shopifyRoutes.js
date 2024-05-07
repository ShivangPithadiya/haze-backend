const express = require('express');
const router = express.Router();

const { fetchProducts, createProduct , fetchOrders, fetchCustomers, fetchProductsById} = require('../controllers/shopifyController');


// Route to fetch product data
router.get('/products', fetchProducts);
router.get('/products/:id', fetchProductsById);

// Route to create a new product
router.post('/products', createProduct);

// Route to fetch orders data
router.get('/orders', fetchOrders);

// Route to fetch customers data
router.get('/customers', fetchCustomers);
module.exports = router;
