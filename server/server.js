const env = require("dotenv");
const path = require("path");
const http = require("http");
const express = require("express");
const socketIo = require("socket.io");

const { generateMessage } = require('./utils/message')
const publicPath = path.join(__dirname, "/../public");
const port = process.env.PORT || 80;
const app = express();
const dotenv = env.config();
let server = http.createServer(app);
let io = socketIo(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("new user joined");

    socket.emit('newMessage', generateMessage("Admin", "Welcom to my chat room"))

    socket.broadcast.emit('newMessage', generateMessage("Admin", "New User Joined"))

    socket.on("createMessage", (message, callback) => {
        console.log("createMessage", message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is server')
    })

    socket.on('disconnect', () => {
        console.log("user was disconnected from server");
    });
});


server.listen(port, () => {
    console.log(`http://localhost/`);
})