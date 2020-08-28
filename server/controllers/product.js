const transformToUrlTitle = require('../utils/transformToUrlTitle');
const changeAlias = require('../utils/changeAlias');
const { clearHash } = require('../db/redis');
const tinify = require('../utils/tinify');
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  let product = new Product(req.body);
  const imagePath = String(req.file.path);

  product.urlTitle = transformToUrlTitle(req.body.name) + Date.now();
  product.image = imagePath;
  product.simplifiedName = changeAlias(req.body.name);

  try {
    tinify(imagePath, imagePath, { width: 800, height: 600 });

    const doc = await product.save();
    clearHash('products');
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

exports.getProduct = async (req, res) => {
  const productUrl = req.params.productUrl;

  try {
    const product = await Product.findOne({ urlTitle: productUrl }).cache();

    if (!product) {
      throw new Error('No product found.');
    }
    return res.status(200).send({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.productId;

  try {
    const product = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    if (!product) {
      throw new Error('No product found.');
    }

    clearHash('products');

    return res.status(200).send({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const productId = req.params.productId;

  try {
    await Product.findByIdAndDelete(productId);
    clearHash('products');

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

exports.getProducts = async (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let limit = req.query.limit ? parseInt(req.query.limit) : 6;
  let skip = parseInt(req.query.skip);

  try {
    const products = await Product.find()
      .sort([[sortBy, order]])
      .limit(limit)
      .skip(skip)
      .cache();

    return res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};
