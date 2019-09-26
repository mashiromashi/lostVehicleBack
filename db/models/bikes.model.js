const mongoose = require("mongoose");
const moment = require("moment");

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");

// Declare the schema of the mongo model
const bikeSchema = new mongoose.Schema({
  postId: {
    type: Number,
    required: true,
    index: true,
    unique: true
  },
  contactNumber: {
    type: Number,
    required: true
  },
  licensePlate: {
    type: String,
    required: true,
    unique: true
  },
  brand: {
    type: String,
    required: true,
    index: true,
    text: true
  },
  model: {
    type: String,
    required: true,
    index: true,
    text: true
  },
  manufacturedYear: Number,
  engineNumber: String,
  isActive: Boolean,
  createdAt: {
    type: String,
    default: DateTime
  },
  imagePath: String,
  remark: String,
  foundDate: {
    type: String
  },
  lostDate: {
    type: String,
    required: true
  },
  lostLocation: {
    type: String,
    required: true,
    text: true
  },
  lostName: {
    type: String,
    required: true,
    text: true
  },
  trash: {
    type: Boolean,
    default: false
  }
});

const bikeModel = mongoose.model("Bike", bikeSchema, "Bikes");

// Export the model
module.exports = bikeModel;
