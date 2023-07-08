const User = require('../models/User');

const createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await User.create(req.body);

    res.status(201).setHeader('Content-Type', 'application/json').json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
