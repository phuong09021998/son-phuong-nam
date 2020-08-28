const multer = require('multer');
const path = require('path');

exports.initializeMulterImage = (pathToSave, type) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, pathToSave);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });

  const fileFilter = (req, file, callback) => {
    const ext = path.extname(file.originalname);

    if (type === 'image') {
      if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !== '.jpeg' && ext !== '.svg') {
        req.fileError = true;
        return callback(null, false);
      }
      req.fileExtension = ext;
      callback(null, true);
    }
  };

  return multer({
    storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter,
  });
};
