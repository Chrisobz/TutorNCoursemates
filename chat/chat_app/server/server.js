const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors');

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
} = require("./utils/users");

const { formatMessage } = require("./utils/messages");

const botName = "Chat app Bot"

app.use(cors());

// listen for new connections
socketIO.on('connection', (socket) => {
    console.log(` ${socket.id} user just connected!`);

    // handle new user joining the chat room
    socket.on('newUser', (data) => {
        const user = userJoin(data.socketID, data.username, data.room)
        if (!user) {
            socket.emit('usernameTaken', true);
        }
        else {
            socket.emit('usernameTaken', false);
            socket.join(user.room)
            // send welcome message to new user
            socket.emit('messageResponse', formatMessage(botName, 'Welcome to the Chat room!', `Bot-${Math.random()}`));
            // notify other users in the room that a new user has joined
            socket.broadcast.to(user.room).emit('messageResponse', formatMessage(botName, `${user.username} has joined the chat.`, `Bot-${Math.random()}`));
            // send list of users in the room to all clients in the room
            socketIO.to(user.room).emit('newUserResponse', getRoomUsers(user.room));
            // send the room name to all clients in the room
            socketIO.to(user.room).emit('roomName', user.room);
        }
    });

    // handle new message
    socket.on('message', (data) => {
        const user = getCurrentUser(socket.id)
        // send the message to all clients in the room
        socketIO.to(user.room).emit('messageResponse', formatMessage(data.username, data.text, data.id));
    });
    
    // handle disconnection
    socket.on('disconnect', () => {
        console.log(' A user disconnected');
        const user = userLeave(socket.id);
        if (user) {
            // notify all clients in the room that a user has left
            socketIO.to(user.room).emit('messageResponse', formatMessage(botName, `${user.username} has left the chat.`, `Bot-${Math.random()}`));
            // send updated list of users to all clients in the room
            socketIO.to(user.room).emit('newUserResponse', getRoomUsers(user.room));
        }
        socket.disconnect();
    });
});

// start the server
http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
