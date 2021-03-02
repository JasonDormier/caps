'use strict';
require('dotenv').config({ path: '../.env' });
const storeName = process.env.STORENAME;
const faker = require('faker');

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

function thankYou(payload) {

  console.log(`VENDOR: Thank you for delivering ${payload.payload.orderID}`);
  console.log(`time: ${new Date().toISOString()}`);
  console.log(payload);
}

module.exports = {
  Vendor,
  thankYou,
};