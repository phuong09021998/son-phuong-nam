const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid!');
        }
      },
    },
    avatar: {
      data: Buffer,
      contentType: String,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 6,
    },
    history: {
      type: Array,
      default: [],
    },
    cart: {
      type: Array,
      default: [],
    },
    role: {
      type: Number,
      enum: [0, 1, 2],
      default: 0,
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// Middlewares

userSchema.pre('save', async function (next) {
  let user = this;
  if (user.isModified('password')) {
    try {
      user.password = await bcrypt.hash(this.password, 8);
      next();
    } catch (error) {
      throw new Error('Cannot hash password');
    }
  } else {
    next();
  }
});

userSchema.methods.generateToken = function () {
  let user = this;
  user.token = jwt.sign(user._id.toHexString(), process.env.SECRET);
  return;
};

userSchema.statics.findByToken = async function (token) {
  try {
    const decode = await jwt.verify(token, process.env.SECRET);
    return User.findOne({ _id: decode, token }).select('-password');
  } catch (error) {
    return error;
  }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
