const tinify = require('tinify');

tinify.key = String(process.env.TINIFY_KEY);

module.exports = function (path, newPath, { width, height }) {
  if (!width && !height) {
    const source = tinify.fromFile(path);
    return source.toFile(newPath);
  } else {
    const source = tinify.fromFile(path);
    const resized = source.resize({
      method: 'fit',
      width,
      height,
    });
    return resized.toFile(newPath);
  }
};
