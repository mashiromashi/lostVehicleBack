const mongoose = require("mongoose");

//Declare the schema of the mongo model
const laptopSchema = new mongoose.Schema({
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
  serial_number: {
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
  }
});

const laptopModel = mongoose.model("Laptop", laptopSchema, "Laptop");

//Export the model
module.exports = laptopModel;
