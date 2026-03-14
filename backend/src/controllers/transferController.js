const Transfer = require('../models/Transfer');
const Product = require('../models/Product');
const StockMovement = require('../models/StockMovement');

// Create a transfer
exports.createTransfer = async (req, res) => {
  try {
    const { product_id, from_location, to_location, quantity } = req.body;

    if (!product_id || !from_location || !to_location || !quantity) {
      return res.status(400).json({
        success: false,
        message: 'Product ID, from_location, to_location, and quantity are required',
      });
    }

    const product = await Product.findById(product_id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    // Check stock
    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: `Insufficient stock. Available: ${product.stock}, Requested: ${quantity}`,
      });
    }

    const transfer = new Transfer({
      product_id,
      from_location,
      to_location,
      quantity,
      createdBy: req.userId,
    });

    await transfer.save();

    // Note: Stock remains same for internal transfer, just tracking location

    // Create stock movement log
    await StockMovement.create({
      product_id,
      type: 'transfer',
      quantity_change: 0,
      reference_id: transfer._id,
      user_id: req.userId,
    });

    res.status(201).json({
      success: true,
      message: 'Transfer created successfully',
      data: {
        transfer,
        product: {
          id: product._id,
          name: product.name,
          sku: product.sku,
          stock: product.stock,
        },
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating transfer',
      error: error.message,
    });
  }
};

// Get all transfers
exports.getTransfers = async (req, res) => {
  try {
    const transfers = await Transfer.find()
      .populate({
        path: 'product_id',
        select: 'name sku category',
      })
      .populate({
        path: 'createdBy',
        select: 'name email',
      });

    res.status(200).json({
      success: true,
      message: 'Transfers fetched successfully',
      data: transfers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching transfers',
      error: error.message,
    });
  }
};

// Get transfer by ID
exports.getTransferById = async (req, res) => {
  try {
    const { id } = req.params;
    const transfer = await Transfer.findById(id)
      .populate({
        path: 'product_id',
        select: 'name sku category',
      })
      .populate({
        path: 'createdBy',
        select: 'name email',
      });

    if (!transfer) {
      return res.status(404).json({
        success: false,
        message: 'Transfer not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Transfer fetched successfully',
      data: transfer,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching transfer',
      error: error.message,
    });
  }
};
