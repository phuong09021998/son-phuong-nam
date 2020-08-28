const fs = require('fs');
const sharp = require('sharp');

const handleUploadImage = async (imageFile, { width, height }) => {
  const buffer = fs.readFileSync(imageFile.path);
  let resizeBuffer;
  if (width && height) {
    resizeBuffer = await sharp(buffer).resize({ width, height }).png().toBuffer();
  } else {
    resizeBuffer = await sharp(buffer).png().toBuffer();
  }
  return {
    data: resizeBuffer,
    contentType: 'image/png',
  };
};

module.exports = handleUploadImage;
