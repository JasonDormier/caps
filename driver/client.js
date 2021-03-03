'use strict';

const io = require('socket.io-client');
const capURL = 'http://localhost:3000/cap';

const capServer = io.connect(capURL);

capServer.on('pick-up', (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.payload.orderID}`);
    capServer.emit('in-transit', payload);
  }, 1000);
  setTimeout(() => {
    console.log(`DRIVER: in-transit ${payload.payload.orderID}`);
    capServer.emit('delivered', payload);
  }, 2000);

});
