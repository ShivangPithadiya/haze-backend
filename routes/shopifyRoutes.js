const express = require('express');
const router = express.Router();

const { fetchProducts, createProduct , fetchOrders, fetchCustomers, fetchProductsById,
addToCart} = require('../controllers/shopifyController');

// Route to create a new product
router.post('/products', createProduct);

// Route to fetch orders data
router.get('/orders', fetchOrders);

// Route to fetch customers data
router.get('/customers', fetchCustomers);

// Route to fetch products data
router.get('/products', fetchProducts);

// Route to fetch products by id
router.get('/products/:id', fetchProductsById);

// Route to add to cart
router.post('/cart', addToCart);

module.exports = router;
