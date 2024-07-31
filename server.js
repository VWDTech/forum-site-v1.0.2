const express = require('express');
const socketio = require('socket.io');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT
const app = express();
const server = app.listen(PORT);

const io = socketio(server);

app.use(express.static('public'));

io.on('connection', (client) =>  {
    client.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });
});