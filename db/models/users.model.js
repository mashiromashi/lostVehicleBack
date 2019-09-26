const mongoose = require("mongoose"); // Erase if already required
const moment = require("moment");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
    unique: true,
    index: true,
    required: true
  },
  fullName: {
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
    type: String
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
    index: true
  },
  lostDate: {
    type: String
  },
  role: {
    type: String,
    enum: ["Lost", "Found", "Admin"],
    index: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: String,
    default: DateTime
  }
});
userSchema.pre("save", function(next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, (err, isMatch) =>
    callback(err, isMatch)
  );
};

const UserModel = mongoose.model("Users", userSchema, "Users");

// Export the model
module.exports = UserModel;
