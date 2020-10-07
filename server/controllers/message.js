const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  const roomId = req.user._id;
  try {
    const messages = await Message.find({ roomId }).sort([['createdAt', 'asc']]);
    return res.send({
      success: true,
      messages,
    });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};
