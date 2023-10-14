const mongoose = require('mongoose');

// Define the Device schema
const deviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

// Create a 'Device' model using the schema
const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
