const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config({ path: path.resolve(__dirname, '.env') });

connectDB();

const app = express();
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Only serve static files in development
// In production on Vercel, frontend is deployed separately
if (process.env.NODE_ENV === 'production') {
  const root = path.resolve();
  app.use(express.static(path.join(root, 'frontend', 'build')));

  app.get('*', (req, res) =>
    res.sendFile(path.join(root, 'frontend', 'build', 'index.html'))
  );
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// For Vercel serverless, export the app
// For local development, start the server
if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}