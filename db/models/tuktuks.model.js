const mongoose = require("mongoose");
const moment = require("moment");

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");

// Declare the schema of the mongo model
const tuktukSchema = new mongoose.Schema({
  postId: {
    type: Number,
    reuqire: true,
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
    required: true,
    lowercase: true
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
  imagePath: {
    type: String
  },
  remark: String,
  foundDate: {
    type: String
  },
  lostDate: {
    type: String
  },
  lostLocation: {
    type: String
  },
  trash: {
    type: Boolean,
    default: false
  }
});

// create text index for full text search
tuktukSchema.index(
  { brand: "text", model: "text" },
  {
    weights: {
      model: 5,
      brand: 1
    }
  }
);

// to ensure that the indexes are created
tuktukSchema.on("index", function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("tuk tuk Complete");
  }
});
const tuktukModel = mongoose.model("Tuk Tuk", tuktukSchema, "Tuk Tuks");

// Export the model
module.exports = tuktukModel;
