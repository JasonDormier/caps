'use strict';

const socketio = require('socket.io');

// opens up our server for connections
const io = socketio(3000);

// namespaces
const cap = io.of('/cap');

// this is a default event that socket.io maintains
io.on('connection', (socket) => {
  console.log('New connection created :' + socket.id);
});

cap.on('connection', (capsSocket) => {

  console.log('New Connection Made', capsSocket.id);

  capsSocket.on('pick-up', (payload) => {
    console.log('picked-up ', `time: ${new Date().toISOString()}`, payload);

    // because of the `broadcast` this is only sending events to sockets that are NOT the sender.
    capsSocket.broadcast.emit('pick-up', payload);
  });
  capsSocket.on('in-transit', (payload) => {
    console.log('in-transit', `time: ${new Date().toISOString()}`, payload);
  });

  capsSocket.on('delivered', (payload) => {
    console.log('delivered', `time: ${new Date().toISOString()}`, payload);
    capsSocket.broadcast.emit('delivered', payload);
  });
});
