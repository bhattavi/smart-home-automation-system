// Import any necessary dependencies
const Device = require('../models/Device'); // Assuming you have a Device model

// Define controller methods
const deviceController = {
  // Get a list of devices
  getAllDevices: async (req, res) => {
    try {
      const devices = await Device.find();
      res.json(devices);
      console.log("Hi")
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // Create a new device
  createDevice: async (req, res) => {
    try {
      const { name, type } = req.body;
      const newDevice = new Device({ name, type });
      const savedDevice = await newDevice.save();
      res.status(201).json(savedDevice);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = deviceController;
