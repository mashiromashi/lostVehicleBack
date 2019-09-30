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
  modifiedAt: {
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
    required: true
  },
  lostName: {
    type: String,
    required: true
  },
  trash: {
    type: Boolean,
    default: false
  }
});

// create text index for full text search
bikeSchema.index(
  { brand: "text", model: "text" },
  {
    weights: {
      model: 5,
      brand: 1
    }
  }
);

// to ensure that the indexes are created
bikeSchema.on("index", function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Bike Complete");
  }
});

const bikeModel = mongoose.model("Bike", bikeSchema, "Bikes");

// Export the model
module.exports = bikeModel;
