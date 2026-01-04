const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); // Import Product Routes
const { notFound, errorHandler } = require('./middleware/errorMiddleware'); // Import Error Handlers

dotenv.config({ path: path.resolve(__dirname, '.env') });

// Establish connection to MongoDB Atlas
connectDB();

const app = express();

// Body parser middleware: allows the server to read JSON from 'req.body'
app.use(express.json()); 

// Feature Routes
app.use('/api/users', userRoutes); 
app.use('/api/products', productRoutes); // Mount Product Routes

// Basic check route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Error Handling Middleware (must be placed after all routes)
app.use(notFound);    // Catches 404 errors (page not found)
app.use(errorHandler); // Catches general server errors (500)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));