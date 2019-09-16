const mongoose = require("mongoose");
const moment = require("moment");

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");

//Declare the schema of the mongo model
const bikeSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    index: true
  },
  postID: {
    type: Number,
    required: true,
    index: true,
    unique: true
  },
  contactNumber: {
    type: Number,
    required: true
  },
  licensePlateAlphabet: {
    type: String,
    required: true
  },
  licensePlateNumber: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  manufacturedYear: Number,
  engineNumber: String,
  isActive: Boolean,
  createdAt: {
    type: String,
    default: DateTime
  },
  imagePath: String,
  remark: String
});

const bikeModel = mongoose.model("Bike", bikeSchema, "Bike");

//Export the model
module.exports = bikeModel;
