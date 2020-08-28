const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const checkModerator = require('../middlewares/moderator');
const { createProduct, getProduct, updateProduct, deleteProduct, getProducts } = require('../controllers/product');
const { initializeMulterImage } = require('../utils/initializeMulter');

const upload = initializeMulterImage('./uploads/product', 'image');

// User routes
router.get('/product/:productUrl', getProduct);
router.get('/products', getProducts);

// Admin routes
router.post('/product', auth, checkModerator, upload.single('upload'), createProduct);
router.put('/product/:productId', auth, checkModerator, updateProduct);
router.delete('/product/:productId', auth, checkModerator, deleteProduct);

module.exports = router;
