const express = require('express');
const router = express.Router();
const receiptController = require('../controllers/receiptController');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/receipts - Create a new receipt (protected)
router.post('/', authMiddleware, receiptController.createReceipt);

// GET /api/receipts - Get all receipts (protected)
router.get('/', authMiddleware, receiptController.getReceipts);

// GET /api/receipts/:id - Get receipt by ID (protected)
router.get('/:id', authMiddleware, receiptController.getReceiptById);

module.exports = router;
