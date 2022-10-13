'use strict';

const carHandler = require('./index');

console.log(carHandler);

carHandler
  .handler({ carId: '1' })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
