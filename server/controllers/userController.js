const User = require('../models/User');
const jwt = require('jsonwebtoken');

const createUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  // check if user exists

  // if user exists, throw error
  let result = await User.findOne({ email });
  if (result) return res.status(400).json({ message: 'User already exists' });

  // if user does not exist, create user
  result = new User({ name, email, password });
  await result.save();

  // create token
  const jwtDATA = { id: result._id, name: result.name };
  const token = jwt.sign(jwtDATA, 'itsasecret', { expiresIn: 3600 });

  // return user
  res.send(token);
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).setHeader('Content-Type', 'application/json').json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUser,
};
