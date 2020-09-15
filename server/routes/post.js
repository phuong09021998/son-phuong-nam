const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const checkModerator = require('../middlewares/moderator');
const { createPost, uploadPostPicture, updatePost, getPost, deletePost, getPosts } = require('../controllers/post');
const { initializeMulterImage } = require('../utils/initializeMulter');

const upload = initializeMulterImage('./uploads/post', 'image');

// User routes
router.get('/post/:postUrl', getPost);
router.get('/posts', getPosts);

// Admin routes
router.post('/post', auth, checkModerator, upload.single('upload'), createPost);
router.post('/post/image', auth, checkModerator, upload.single('upload'), uploadPostPicture);
router.put('/post/:postId', auth, checkModerator, updatePost);
router.delete('/post/:postId', auth, checkModerator, deletePost);

module.exports = router;
