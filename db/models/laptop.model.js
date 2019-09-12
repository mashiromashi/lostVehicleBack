const mongoose = require("mongoose");
const moment = require("moment");

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");

//Declare the schema of the mongo model
const laptopSchema = new mongoose.Schema({
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
  serialNumber: {
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
  isActive: Boolean,
  createdAt: {
    type: String,
    default: DateTime
  }
});

const laptopModel = mongoose.model("Laptop", laptopSchema, "Laptop");

//Export the model
module.exports = laptopModel;
