const mongoose = require("mongoose");
const moment = require("moment");

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");

//Declare the schema of the mongo model
const tuktukSchema = new mongoose.Schema({
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
  licensePlate: {
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
  manufacturedYear: Number,
  engineNumber: String,
  isActive: Boolean,
  createdAt: {
    type: String,
    default: DateTime
  }
});

const tuktukModel = mongoose.model("Tuk Tuk", tuktukModel, " Tuk Tuk");

//Export the model
module.exports = tuktukModel;
