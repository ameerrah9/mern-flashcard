const express = require('express');
const router = express.Router();
const { createUser, getUser } = require('../controllers/userController');
const auth = require('../utils/auth');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Create User
router.route('/').post(createUser);

// Current User information
router.route('/').get(auth, getUser);

module.exports = router;
