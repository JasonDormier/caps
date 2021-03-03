// 'use strict';
// const vendor = require('../vendor/vendor.js');
// const driver = require('../driver/driver.js');
// console.log = jest.fn();
// describe('Testing the vendor module', () => {
//   let payload = {
//     event: 'pickup',
//     time: 6,
//     payload: {
//       store: 'Bronco Bills',
//       orderID: '12345678910',
//       customer: 'Terry',
//       address: '34 shut the door st',
//     },
//   };
//   it('vendor should console log some output', () => {
//     vendor.thankYou(payload);
//     expect(console.log).toHaveBeenCalled();
//   });
//   it('driver picked up should console log some output', () => {
//     driver.pickedUp(payload);
//     expect(console.log).toHaveBeenCalled();
//   });
//   it('driver delivered should console log some output', () => {
//     driver.inTransit(payload);
//     expect(console.log).toHaveBeenCalled();
//   });
// });