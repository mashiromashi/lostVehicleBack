const mongoose = require("mongoose");
const moment = require("moment");

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");

//Declare the schema of the mongo model
const phoneSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  contactNumber: {
    type: Number,
    required: true
  },
  imei_1: {
    type: Number,
    required: true
  },
  imei_2: {
    type: Number
  },
  isActive: Boolean,
  createdAt: {
    type: String,
    default: DateTime
  }
});

const phoneModel = mongoose.model("Phone", phoneSchema, "Phone");

//Export the model
module.exports = phoneModel;
