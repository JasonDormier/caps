'use strict';
const io = require('socket.io-client');
const capURL = 'http://localhost:3000/cap';

const capServer = io.connect(capURL);

require('dotenv').config({ path: '../.env' });
const storeName = process.env.STORENAME;
const faker = require('faker');

const order = new Vendor();

class Vendor {
  constructor() {
    this.db = [];
  }

  create() {
    let entry = {
      store: storeName,
      orderID: faker.random.uuid(),
      customer: faker.name.findName(),
      address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    };
    this.db.push(entry);
    return entry;
  }
}
capServer.on('delivered', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.payload.orderID}`);
});

setInterval(() => {
  capServer.emit('pick-up', { payload: order.create() });
}, 5000);
