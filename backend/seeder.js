const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const products = require('./data/products');
const User = require('./models/User');
const Product = require('./models/Product');
const connectDB = require('./config/db');

dotenv.config({ path: 'backend/.env' });
connectDB();

const importData = async () => {
  try {
    await User.deleteMany(); // Clears existing users
    await Product.deleteMany(); // Clears existing products

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id; // Get the ID of the admin we created

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }; // Assign the admin as the creator of every product
    });

    await Product.insertMany(sampleProducts);
    console.log('✅ Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

importData();