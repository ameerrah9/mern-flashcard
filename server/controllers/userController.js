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
  const jwtDATA = { _id: result._id, name: result.name };
  const token = jwt.sign(jwtDATA, 'itsasecret', { expiresIn: 3600 });

  // return user
  res.send(token);
};

const getUser = async (req, res, next) => {
  try {
    const profile = await User.findById(req.user._id);
    res.send(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createUser,
  getUser,
};
