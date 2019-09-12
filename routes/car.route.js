const express = require("express");
const app = express();
const carModel = require("../db/models/car.model");

//Get all the lost cars in the database
app.get("/getall", async (req, res, next) => {
  const getAllCars = await carModel.find({});
  try {
    res.send(getAllCars);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Adding the lost car into the database
app.get("/add", async (req, res, next) => {
  const addCar = new carModel(req.body);
  try {
    await addCar.save();
    res.send(addCar, "Car scuccessfully added to the database");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
