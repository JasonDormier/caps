'use strict';
const events = require('../events.js');
const vendor = require('./vendor.js');
const driver = require('./driver.js');

const order = new vendor.Vendor();

events.on('pick-up', driver.pickedUp);
events.on('in-transit', driver.inTransit);
events.on('delivered', vendor.thankYou);

setInterval(() => {
  events.emit('pick-up', { payload: order.create() });
}, 5000);
