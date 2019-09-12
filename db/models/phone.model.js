const mongoose = require("mongoose");

//Declare the schema of the mongo model
const phoneSchema = new mongoose.Schema({
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
  imei_1: {
    type: Number,
    required: true
  },
  imei_2: {
    type: Number
  }
});

const phoneModel = mongoose.model("Phone", phoneSchema, "Phone");

//Export the model
module.exports = phoneModel;
