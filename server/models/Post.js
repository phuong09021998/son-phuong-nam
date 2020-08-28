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
    urlTitle: {
      type: String,
      required: true,
      unique: true,
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
      default: true,
    },
    finish: {
      type: Boolean,
      default: true,
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
