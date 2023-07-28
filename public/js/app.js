let socket = io();

socket.on('connect', function ()  {
    console.log("connected to server");
});
socket.on('disconnect', function () {
    console.log("disconnected from server");
});


socket.on('newMessage', function (message) {
    console.log('newMessage', message);
})

socket.emit('createMessage', {
    from:"Hari",
    text: "Haa"
}, function (message) {
    console.log(message,"Server is running");
})