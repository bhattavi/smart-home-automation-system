// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API Routes
app.use('/api', apiRoutes);

module.exports = app;
