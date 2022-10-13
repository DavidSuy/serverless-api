'use strict';

const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  carId: {
    type: String,
    required: true,
  },
  make: String,
  model: String,
  color: String,
  transmission: String,
});

const CarModel = dynamoose.model('cars', schema);

exports.handler = async (event) => {
  let carData = [];

  const query = event.queryStringParameters;

  if (query && query.carId) {
    carData = await CarModel.query('carId').eq(query.carId).exec();
  } else {
    carData = await CarModel.scan().exec();
  }

  // console.log(carData[0]);
  console.log(JSON.stringify(carData));

  return {
    statusCode: 200,
    body: JSON.stringify(carData),
  };
};
