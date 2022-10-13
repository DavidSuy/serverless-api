'use strict';

const carCreate = require('./index');

carCreate
  .handler()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
