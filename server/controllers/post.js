const Post = require('../models/Post');
const transformToUrlTitle = require('../utils/transformToUrlTitle');
const changeAlias = require('../utils/changeAlias');
const { clearHash } = require('../db/redis');
const tinify = require('../utils/tinify');

exports.createPost = async (req, res) => {
  let post = new Post(req.body);
  const imagePath = String(req.file.path);

  post.urlTitle = transformToUrlTitle(req.body.title) + Date.now();
  post.defaultImg = imagePath;
  post.simplifiedTitle = changeAlias(req.body.title);

  try {
    if (req.fileExtension !== '.svg') {
      tinify(imagePath, imagePath, { width: 600, height: 450 });
    }

    const doc = await post.save();
    clearHash('posts');
    return res.status(200).send({
      success: true,
      post: doc,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

exports.uploadPostPicture = async (req, res) => {
  if (req.fileError) {
    return res.status(400).send({
      success: false,
      error: 'You must upload an image.',
    });
  }

  const imagePath = req.file.path;
  const postId = req.params.postId;

  try {
    if (req.fileExtension !== '.svg') {
      tinify(imagePath, imagePath, { width: 600, height: 450 });
    }

    const post = await Post.findByIdAndUpdate(postId, { $push: { images: imagePath } }, { new: true });
    if (!post) {
      throw new Error('Post not found.');
    }
    return res.status(200).send({
      success: true,
      path,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findByIdAndUpdate(postId, req.body, { new: true });
    if (!post) {
      throw new Error('No post found.');
    }

    clearHash('posts');

    return res.status(200).send({
      success: true,
      post,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

exports.getPost = async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findById(postId).cache();

    if (!post) {
      throw new Error('No post found.');
    }
    return res.status(200).send({
      success: true,
      post,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

exports.getPosts = async (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  let skip = parseInt(req.query.skip);

  try {
    const posts = await Post.find()
      .select('-images')
      .sort([[sortBy, order]])
      .limit(limit)
      .skip(skip)
      .cache();

    return res.status(200).send({
      success: true,
      posts,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

exports.deletePost = async (req, res) => {
  const postId = req.params.postId;

  try {
    await Post.findByIdAndDelete(postId);
    clearHash('posts');

    return res.status(200).send({
      success: true,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
