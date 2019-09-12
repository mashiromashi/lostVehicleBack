const mongoose = require("mongoose");

//Declare the schema of the mongo model
const bikeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
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
  manufactured_year: Number,
  engine_number: String
});

const bikeModel = mongoose.model("Bike", bikeSchema, "Bike");

//Export the model
module.exports = bikeModel;
