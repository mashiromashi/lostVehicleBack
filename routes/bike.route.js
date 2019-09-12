const express = require("express");
const app = express();
const bikeModel = require("../db/models/bike.model");

//get all bike list for the admin
app.get("/getall", async (req, res, next) => {
  const getAllBike = await bikeModel.find({});
  try {
    res.send(getAllBike);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Adding the lost bike into the database
app.get("/add", async (req, res, next) => {
  const addBike = new bikeModel(req.body);
  try {
    await addBike.save();
    res.send(addBike, "Bike successfully added to the database");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
