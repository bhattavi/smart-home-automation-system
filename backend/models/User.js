const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email addresses are unique
  },
  // Add more fields as needed
});

// Create a 'User' model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
