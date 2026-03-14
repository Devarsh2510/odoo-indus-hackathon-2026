const mongoose = require('mongoose');

const stockMovementSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  type: {
    type: String,
    enum: ['receipt', 'delivery', 'transfer', 'adjustment'],
    required: true,
  },
  quantity_change: {
    type: Number,
    required: true,
  },
  reference_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  reference_type: {
    type: String,
    enum: ['Receipt', 'Delivery', 'Transfer', 'Adjustment'],
    required: true,
  },
  notes: {
    type: String,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('StockMovement', stockMovementSchema);
