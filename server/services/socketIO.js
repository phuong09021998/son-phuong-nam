const { server } = require('../app');
const io = require('socket.io')(server);
const Message = require('../models/Message');

io.on('connect', (socket) => {
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on('Chat Message', (data) => {
    const message = new Message(data);

    try {
      message.save();
      io.in(roomId).emit('Chat Message', data);
    } catch (error) {
      io.in(roomId).emit('Chat Error', error);
    }
  });

  socket.on('Initialize Chat', () => {
    io.in(roomId).emit('Chat Message', {
      sender: 'Admin',
      createdAt: Date.now(),
      roomId: roomId,
      type: 'text',
      message: 'Xin chào! Chúng tôi có thể hỗ trợ bạn thông tin gì?',
    });
  });
});
