const connectDB = require('../../backend/config/db');
const Product = require('../../backend/models/Product');

module.exports = async function handler(req, res) {
  try {
    await connectDB();

    if (req.method === 'GET') {
      const products = await Product.find({});
      res.status(200).json(products);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in products API:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};