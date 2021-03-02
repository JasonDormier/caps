'use strict';

const events = require('../events.js');

function pickedUp(payload) {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.payload.orderID}`);
    console.log('Event: Pick up');
    console.log(`time: ${new Date().toISOString()}`);
    console.log(payload);
    events.emit('in-transit', payload);
  }, 1000);
}

function inTransit(payload) {
  setTimeout(() => {
    console.log(`DRIVER: in-transit ${payload.payload.orderID}`);
    console.log('Event: in-transit');
    console.log(`time: ${new Date().toISOString()}`);
    console.log(payload);
    events.emit('delivered', payload);
  }, 2000);
}

module.exports = { inTransit, pickedUp };


