const mongoose = require("mongoose");
const moment = require("moment");

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");

// Declare the Schema of The Mongo model
const carSchema = new mongoose.Schema({
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
  manfacturedYear: Number,
  engineNumber: String,
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: String,
    default: DateTime
  },
  modifiedAt: {
    type: String,
    default: DateTime
  },
  modifiedBy: {
    type: String
  },
  imagePath: String,
  remark: String,
  foundDate: {
    type: String
  },
  lostDate: {
    type: String
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
carSchema.index(
  { brand: "text", model: "text" },
  {
    weights: {
      model: 5,
      brand: 1
    }
  }
);

// to ensure that the indexes are created
carSchema.on("index", function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Car Complete");
  }
});
const carModel = mongoose.model("Car", carSchema, "Cars");

// Export the model
module.exports = carModel;
