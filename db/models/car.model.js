const mongoose = require("mongoose");

//Declare the Schema of The Mongo model
const carSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    index: true
  },
  contact_number: {
    type: Number,
    required: true
  },
  license_plate: {
    type: String,
    unique: true,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  manfactured_year: Number,
  engine_number: String
});

const carModel = mongoose.model("Car", carSchema, "Car");

//Export the model
module.exports = carModel;
