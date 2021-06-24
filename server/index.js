const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

const socket = require('socket.io');
const io = socket(server);

io.on('connection', (socket) => {
  let user;

  socket.on('connected', (name) => {
    user = name;
    socket.broadcast.emit('messages', {
      name: '',
      message: `${user} has joined the room`,
    });
  });

  socket.on('message', (name, message) => {
    io.emit('messages', { name, message });
  });

  socket.on('disconnect', () => {
    io.emit('messages', {
      name: '',
      message: `${user} has left the room`,
    });
  });
});

server.listen(PORT, () => console.log('Server started'));
