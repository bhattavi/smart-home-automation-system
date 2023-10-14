// routes/api.js
const express = require('express');
const router = express.Router();

const deviceController = require('../controllers/deviceController');
const userController = require('../controllers/userController');

// Define your API routes here
router.get('/devices', deviceController.getAllDevices);
router.post('/devices', deviceController.createDevice);
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = router;
