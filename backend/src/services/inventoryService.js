const Product = require('../models/Product');
const StockMovement = require('../models/StockMovement');

class InventoryService {
  // Get total stock value
  static async getTotalStockValue() {
    try {
      const products = await Product.find();
      const totalValue = products.reduce((sum, product) => {
        return sum + product.stock * product.price;
      }, 0);
      return totalValue;
    } catch (error) {
      throw new Error('Error calculating total stock value: ' + error.message);
    }
  }

  // Get inventory by warehouse
  static async getInventoryByWarehouse(warehouseId) {
    try {
      const products = await Product.find({ warehouse_id: warehouseId });
      const totalItems = products.reduce((sum, product) => sum + product.stock, 0);
      const totalValue = products.reduce((sum, product) => {
        return sum + product.stock * product.price;
      }, 0);

      return {
        warehouseId,
        products,
        totalItems,
        totalValue,
      };
    } catch (error) {
      throw new Error('Error fetching warehouse inventory: ' + error.message);
    }
  }

  // Get stock movements for a product
  static async getProductMovementHistory(productId, limit = 50) {
    try {
      const movements = await StockMovement.find({ product_id: productId })
        .populate('createdBy', 'name email')
        .sort({ date: -1 })
        .limit(limit);

      return movements;
    } catch (error) {
      throw new Error('Error fetching movement history: ' + error.message);
    }
  }

  // Get low stock products
  static async getLowStockProducts(threshold = 10) {
    try {
      const lowStockProducts = await Product.find({ stock: { $lte: threshold } });
      return lowStockProducts;
    } catch (error) {
      throw new Error('Error fetching low stock products: ' + error.message);
    }
  }

  // Get inventory summary
  static async getInventorySummary() {
    try {
      const totalProducts = await Product.countDocuments();
      const totalStock = await Product.aggregate([
        { $group: { _id: null, total: { $sum: '$stock' } } },
      ]);

      const totalValue = await Product.aggregate([
        {
          $group: {
            _id: null,
            total: { $sum: { $multiply: ['$stock', '$price'] } },
          },
        },
      ]);

      const lowStockCount = await Product.countDocuments({ stock: { $lte: 10 } });

      return {
        totalProducts,
        totalStock: totalStock[0]?.total || 0,
        totalValue: totalValue[0]?.total || 0,
        lowStockCount,
      };
    } catch (error) {
      throw new Error('Error generating inventory summary: ' + error.message);
    }
  }
}

module.exports = InventoryService;
