const User = require('../models/userModel');

// GET - Read all users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// POST - Create a user
const createUser = async (req, res) => {
  const { name, email } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = new User({ name, email });
  await user.save();

  res.status(201).json(user);
};
  
// PUT - Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const user = await User.findById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = name || user.name;
  user.email = email || user.email;

  await user.save();
  res.status(200).json(user);
};

module.exports = { getUsers, createUser, updateUser };
