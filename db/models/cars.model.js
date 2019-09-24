const mongoose = require('mongoose');
const moment = require('moment');

const DateTime = moment(new Date()).format('DD-MMM-YYYY_hh:mm:ss');

// Declare the Schema of The Mongo model
const carSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
    index: true,
  },
  postID: {
    type: Number,
    required: true,
    index: true,
    unique: true,
  },
  contactNumber: {
    type: Number,
    required: true,
    text: true,
    index: true,
  },
  licensePlate: {
    type: String,
    unique: true,
    required: true,
  },
  brand: {
    type: String,
    required: true,
    index: true,
    text: true,
  },
  model: {
    type: String,
    required: true,
    text: true,
    index: true,
  },
  manfacturedYear: Number,
  engineNumber: String,
  isActive: Boolean,
  createdAt: {
    type: String,
    default: DateTime,
  },
  modifiedAt: {
    type: String,
    default: DateTime,
  },
  modifiedBy: {
    type: String,
  },
  imagePath: String,
  remark: String,
  foundDate: {
    type: String,
  },
});

const carModel = mongoose.model('Car', carSchema, 'Car');

// Export the model
module.exports = carModel;
