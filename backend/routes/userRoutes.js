const express = require('express');
const router = express.Router();
const { authUser, getUsers } = require('../controllers/userController');

// Standard route for getting all users
router.route('/').get(getUsers);

// New route for user login
router.post('/login', authUser);

module.exports = router;