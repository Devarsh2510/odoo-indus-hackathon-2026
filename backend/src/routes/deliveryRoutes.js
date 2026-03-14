const express = require('express');
const router = express.Router();
const deliveryController = require('../controllers/deliveryController');
const authMiddleware = require('../middleware/authMiddleware');

// POST /api/deliveries - Create a new delivery (protected)
router.post('/', authMiddleware, deliveryController.createDelivery);

// GET /api/deliveries - Get all deliveries (protected)
router.get('/', authMiddleware, deliveryController.getDeliveries);

// GET /api/deliveries/:id - Get delivery by ID (protected)
router.get('/:id', authMiddleware, deliveryController.getDeliveryById);

module.exports = router;
