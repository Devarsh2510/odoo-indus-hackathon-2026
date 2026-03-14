const Receipt = require('../models/Receipt');
const Product = require('../models/Product');
const StockMovement = require('../models/StockMovement');

// Create a receipt
exports.createReceipt = async (req, res) => {
  try {
    const { product_id, supplier, quantity, status } = req.body;

    if (!product_id || !supplier || !quantity) {
      return res.status(400).json({
        success: false,
        message: 'Product ID, supplier, and quantity are required',
      });
    }

    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    const receipt = new Receipt({
      product_id,
      supplier,
      quantity,
      status: status || 'confirmed',
      createdBy: req.userId,
    });

    await receipt.save();

    // Update product stock
    product.stock += quantity;
    await product.save();

    // Create stock movement log
    await StockMovement.create({
      product_id,
      type: 'receipt',
      quantity_change: quantity,
      reference_id: receipt._id,
      user_id: req.userId,
    });

    res.status(201).json({
      success: true,
      message: 'Receipt created successfully',
      data: {
        receipt,
        product: {
          id: product._id,
          name: product.name,
          sku: product.sku,
          newStock: product.stock,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating receipt',
      error: error.message,
    });
  }
};

// Get all receipts
exports.getReceipts = async (req, res) => {
  try {
    const receipts = await Receipt.find().populate('product_id').populate('createdBy', 'name email');

    res.status(200).json({
      success: true,
      message: 'Receipts fetched successfully',
      data: receipts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching receipts',
      error: error.message,
    });
  }
};

// Get receipt by ID
exports.getReceiptById = async (req, res) => {
  try {
    const { id } = req.params;
    const receipt = await Receipt.findById(id).populate('product_id').populate('createdBy', 'name email');

    if (!receipt) {
      return res.status(404).json({
        success: false,
        message: 'Receipt not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Receipt fetched successfully',
      data: receipt,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching receipt',
      error: error.message,
    });
  }
};
