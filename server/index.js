const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000

const socket = require('socket.io');
const io = socket(server);

io.on('connection', (socket) => {

  socket.on('connected', () => {
    console.log('User connected')
  })
})

server.listen(PORT, () => console.log('Server started'));