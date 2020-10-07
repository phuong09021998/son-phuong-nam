const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { getMessages } = require('../controllers/message');

// User routes
router.get('/messages', auth, getMessages);

module.exports = router;
