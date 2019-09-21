const express = require("express");
const app = express();
const PhoneModel = require("../db/models/phone.model");

// Get all the lost phones in the database for admins
app.get("/getall", async (req, res, next) => {
  const getAllPhones = await phoneModel.find({});
  try {
    res.send(getAllPhones);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adding the lost phone into the database
app.get("/add", async (req, res, next) => {
  const addPhone = new PhoneModel(req, res, next);
  try {
    await addPhone.save();
    res.send(addPhone, "Phone successfully added to the database");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
