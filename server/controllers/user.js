const User = require('../models/User');
const formidable = require('formidable');
const handleUploadImage = require('../utils/handleUploadImage');
const bcrypt = require('bcrypt');

// User controllers
exports.readUser = (req, res) => {
  req.user.avatar = undefined;
  return res.status(200).send({
    success: true,
    user: req.user,
  });
};

exports.createUser = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).send({
        success: false,
        error: err.message,
      });
    }

    let user = new User(fields);

    if (files.avatar) {
      if (!/\.(jpe?g|png|gif|bmp)$/i.test(files.avatar.name)) {
        return res.status(200).send({
          success: false,
          error: 'You must upload an image.',
        });
      }
      if (files.avatar.size > 1000000) {
        return res.status(200).send({
          success: false,
          error: 'Image cannot be larger than 1Mb.',
        });
      }
      user.avatar = await handleUploadImage(files.avatar, { width: 250, height: 250 });
    }

    try {
      if (user.role !== 0) {
        throw new Error('You are not authorized to create a moderator.');
      }

      if (!user.token) {
        user.generateToken();
      }

      const doc = await user.save();
      doc.avatar = undefined;
      doc.password = undefined;
      return res.cookie('spn_auth', user.token).status(200).send({
        success: true,
        user: doc,
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        error: error.message,
      });
    }
  });
};

exports.createUserByAdmin = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).send({
        success: false,
        error: err.message,
      });
    }

    let user = new User(fields);

    if (files.avatar) {
      if (!/\.(jpe?g|png|gif|bmp)$/i.test(files.avatar.name)) {
        return res.status(200).send({
          success: false,
          error: 'You must upload an image.',
        });
      }
      if (files.avatar.size > 1000000) {
        return res.status(200).send({
          success: false,
          error: 'Image cannot be larger than 1Mb.',
        });
      }
      user.avatar = await handleUploadImage(files.avatar, { width: 250, height: 250 });
    }

    try {
      const doc = await user.save();
      doc.avatar = undefined;
      doc.password = undefined;
      return res.status(200).send({
        success: true,
        user: doc,
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        error: error.message,
      });
    }
  });
};

exports.getAvatar = (req, res) => {
  if (req.user.avatar.data) {
    res.set('Content-Type', req.user.avatar.contentType);
    return res.status(200).send(req.user.avatar.data);
  } else {
    return res.status(400).send({
      success: false,
      error: 'No avatar found.',
    });
  }
};

exports.updateUser = (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).send({
        success: false,
        error: err.message,
      });
    }

    let user;

    if (files.avatar) {
      fields.avatar = {};

      if (!/\.(jpe?g|png|gif|bmp)$/i.test(files.avatar.name)) {
        return res.status(200).send({
          success: false,
          error: 'You must upload an image.',
        });
      }
      if (files.avatar.size > 1000000) {
        return res.status(200).send({
          success: false,
          error: 'Image cannot be larger than 1Mb.',
        });
      }
      console.log(files.avatar);
      fields.avatar = await handleUploadImage(files.avatar, { width: 250, height: 250 });
      user = await User.findOneAndUpdate({ _id: req.user._id }, fields, { new: true }).select('-avatar -password');
    } else {
      user = await User.findOneAndUpdate({ _id: req.user._id }, fields, { new: true }).select('-avatar -password');
    }

    return res.status(200).send({
      success: true,
      user,
    });
  });
};

exports.loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.findOne({ email }).select('-avatar');

    if (!user) {
      throw new Error('User not found.');
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error('Password is incorrect.');
    }

    user.generateToken();
    await User.findByIdAndUpdate(user._id, { token: user.token });
    user.password = undefined;
    return res.cookie('spn_auth', user.token).status(200).send({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(401).send({
      success: false,
      error: error.message,
    });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user._id, { token: '' }, { new: true });
    return res.status(200).send({
      success: true,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// Admin controllers
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort([['name', 'asc']]);
    return res.status(200).send({
      success: true,
      users,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

exports.getUserById = async (req, res) => {
  return res.status(200).send({
    success: true,
    user: req.userById,
  });
};

exports.updateUserById = async (req, res) => {
  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).send({
        success: false,
        error: err.message,
      });
    }

    let user;

    if (files.avatar) {
      fields.avatar = {};

      if (!/\.(jpe?g|png|gif|bmp)$/i.test(files.avatar.name)) {
        return res.status(200).send({
          success: false,
          error: 'You must upload an image.',
        });
      }
      if (files.avatar.size > 1000000) {
        return res.status(200).send({
          success: false,
          error: 'Image cannot be larger than 1Mb.',
        });
      }

      fields.avatar = await handleUploadImage(files.avatar, { width: 250, height: 250 });
      user = await User.findOneAndUpdate({ _id: req.userById._id }, fields, { new: true }).select('-avatar -password');
    } else {
      user = await User.findOneAndUpdate({ _id: req.userById._id }, fields, { new: true }).select('-avatar -password');
    }

    return res.status(200).send({
      success: true,
      user,
    });
  });
};

exports.deleteUserById = async (req, res) => {
  try {
    if (req.userById.role === 0) {
      await User.findByIdAndDelete(req.userById._id);
      return res.status(200).send({
        success: true,
      });
    } else {
      throw new Error('You cannot delete moderator.');
    }
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// Middleware
exports.extractUserById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      throw new Error('User not found.');
    }
    req.userById = user;
    next();
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
