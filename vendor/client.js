'use strict';
const io = require('socket.io-client');
require('dotenv').config({ path: '../.env' });
const storeName = process.env.STORENAME;
const storeName2 = process.env.STORENAME2;
const faker = require('faker');

const capURL = 'http://localhost:3000/cap';
const capServer = io.connect(capURL);



//capServer.emit('getAll');

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
  create2() {
    let entry = {
      store: storeName2,
      orderID: faker.random.uuid(),
      customer: faker.name.findName(),
      address: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
    };
    this.db.push(entry);
    return entry;
  }
}

const order = new Vendor();

capServer.on('delivered', (payload) => {
  console.log(`VENDOR: Thank you for delivering ${payload.payload.orderID}`);
});

setInterval(() => {
  capServer.emit('pick-up', { payload: order.create() });
}, 5000);

setInterval(() => {
  capServer.emit('pick-up', { payload: order.create2() });
}, 6100);
