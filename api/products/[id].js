const connectDB = require('../../backend/config/db');
const Product = require('../../backend/models/Product');

module.exports = async function handler(req, res) {
  try {
    await connectDB();

    const { id } = req.query;

    if (req.method === 'GET') {
      const product = await Product.findById(id);
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in product detail API:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};