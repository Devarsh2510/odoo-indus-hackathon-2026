const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/products - Create a new product (protected)
router.post('/', authMiddleware, productController.createProduct);

// GET /api/products - Get all products
router.get('/', productController.getAllProducts);

// GET /api/products/:id - Get product by ID
router.get('/:id', productController.getProductById);

// PUT /api/products/:id - Update product (protected)
router.put('/:id', authMiddleware, productController.updateProduct);

// DELETE /api/products/:id - Delete product (protected)
router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;
