// Import any necessary dependencies
const User = require('../models/User'); // Assuming you have a User model

// Define controller methods
const userController = {
  // Get a list of users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    try {
      const { username, email } = req.body;
      const newUser = new User({ username, email });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = userController;
