const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Import routes
const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');

// App
const server = express();

// Middleware
server.use(bodyParser.json());
server.use(cookieParser());
server.use(morgan('dev'));
server.use(cors());
server.use('/uploads', express.static('uploads'));
server.use(express.static('frontend/public'));

// Routes middlewares
server.use('/api', userRoutes);
server.use('/api', postRoutes);

module.exports = server;
