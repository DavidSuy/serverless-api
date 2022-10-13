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
  console.log(event.body);
  console.log(JSON.stringify(event.body));
  console.log(JSON.parse(event.body));

  let newCar = new CarModel(JSON.parse(event.body));
  let newCarRecord = await newCar.save();

  console.log(newCarRecord);

  return {
    statusCode: 200,
    body: JSON.stringify(newCarRecord),
    // body: JSON.stringify(event.body),
  };
};
