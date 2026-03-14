const Delivery = require('../models/Delivery');
const Product = require('../models/Product');
const StockMovement = require('../models/StockMovement');

// Create a delivery
exports.createDelivery = async (req, res) => {
  try {
    const { product_id, customer, quantity, status } = req.body;

    if (!product_id || !customer || !quantity) {
      return res.status(400).json({
        success: false,
        message: 'Product ID, customer, and quantity are required',
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

    const delivery = new Delivery({
      product_id,
      customer,
      quantity,
      status: status || 'completed',
      createdBy: req.userId,
    });

    await delivery.save();

    // Update product stock
    product.stock -= quantity;
    await product.save();

    // Create stock movement log
    await StockMovement.create({
      product_id,
      type: 'delivery',
      quantity_change: -quantity,
      reference_id: delivery._id,
      user_id: req.userId,
    });

    res.status(201).json({
      success: true,
      message: 'Delivery created successfully',
      data: {
        delivery,
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
      message: 'Error creating delivery',
      error: error.message,
    });
  }
};

// Get all deliveries
exports.getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find().populate('product_id').populate('createdBy', 'name email');

    res.status(200).json({
      success: true,
      message: 'Deliveries fetched successfully',
      data: deliveries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching deliveries',
      error: error.message,
    });
  }
};

// Get delivery by ID
exports.getDeliveryById = async (req, res) => {
  try {
    const { id } = req.params;
    const delivery = await Delivery.findById(id).populate('product_id').populate('createdBy', 'name email');

    if (!delivery) {
      return res.status(404).json({
        success: false,
        message: 'Delivery not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Delivery fetched successfully',
      data: delivery,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching delivery',
      error: error.message,
    });
  }
};
