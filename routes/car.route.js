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
app.post("/add", async (req, res, next) => {
  const addCar = new carModel(req.body);
  try {
    await addCar.save();
    res.send(addCar);
    res.send("Car added Successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

//Update module for the lost car if found
app.post("/update", async (req, res) => {
  const filter = { postID: req.body.postID };
  const update = { isActive: req.body.isActive };
  const updateCar = await carModel.findOneAndUpdate(filter, update, {
    new: true
  });
  try {
    if (updateCar) {
      console.log(updateCar);

      res.send("Ok !");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
