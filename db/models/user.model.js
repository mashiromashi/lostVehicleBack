const mongoose = require("mongoose"); // Erase if already required
const moment = require("moment");

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");
// Declare the Schema of the Mongo model
let userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  mobile: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: true,
    index: true
  },
  township: {
    type: String,
    index: true,
    required: true
  },
  city: {
    type: String,
    index: true,
    required: true
  },
  address: {
    type: String,
    index: true,
    required: true
  },
  lostItem: {
    type: String,
    index: true
  },
  role: {
    type: String,
    enum: ["Lost", "Found", "Admin"]
  },
  isActive: Boolean,
  createdAt: {
    type: String,
    default: DateTime
  }
});

const UserModel = mongoose.model("User", userSchema, "User");

//Export the model
module.exports = UserModel;
