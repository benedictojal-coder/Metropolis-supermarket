const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  // This signs a new token using the user's ID and a secret "password" from your .env file
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // The user stays logged in for 30 days
  });
};

module.exports = generateToken;