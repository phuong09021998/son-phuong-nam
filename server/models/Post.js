const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    simplifiedTitle: {
      type: String,
    },
    defaultImg: {
      type: String,
      required: true,
    },
    urlTitle: {
      type: String,
      unique: true,
    },
    content: {
      type: String,
    },
    type: {
      type: String,
      enum: ['service', 'project', 'info'],
    },
    publish: {
      type: Boolean,
      default: false,
    },
    finish: {
      type: Boolean,
      default: false,
    },
    images: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

// Middlewares

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
