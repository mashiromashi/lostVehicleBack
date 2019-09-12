const express = require("express");
const app = express();
const userModel = require("../db/models/user.model");

//Get all user list for admin
app.get("/getall", async (req, res, next) => {
  const getAllUser = await userModel.find({});
  try {
    res.send(getAllUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Register new user
app.get("/register", async (req, res, next) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res.send(user, "User Successfully Registered");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
