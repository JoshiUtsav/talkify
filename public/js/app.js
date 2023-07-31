let socket = io();

socket.on('connect', function () {
    console.log("connected to server");
});
socket.on('disconnect', function () {
    console.log("disconnected from server");
});


socket.on('newMessage', function (message) {
    const formatTime = moment(message.createdAt).format('LT');
    const template = document.querySelector('#message-template').innerHTML;
    const html = Mustache.render(template, {
        from: message.from,
        text: message.text,
        createdAt: formatTime
    });
    const div = document.createElement('div');
    div.innerHTML = html
    document.querySelector('body').appendChild(div);
})

socket.on('newLocationMessage', function (message) {
    const formatTime = moment(message.createdAt).format('LT');
    console.log('newLocationMessage', message);
    const template = document.querySelector('#location-message-template').innerHTML;
    const html = Mustache.render(template, {
        from: message.from,
        url: message.url,
        createdAt: formatTime
    });
    const div = document.createElement('div');
    div.innerHTML = html
    document.querySelector('body').appendChild(div);
})

document.querySelector('#submit-btn').addEventListener('click', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: "user",
        text: document.querySelector('input[name="message"]').value
    }, function () {

    })

})
document.querySelector('#send-location').addEventListener('click', function (e) {
    if(!navigator.geolocation){
        return alert("Geolocation  is not supported")
    }

    navigator.geolocation.getCurrentPosition(function (position){
       socket.emit('createLocationMessage', {
        lat: position.coords.latitude,
        lng: position.coords.longitude
       })
    }, function () {
        alert("Unable to fetch location")
    })
})