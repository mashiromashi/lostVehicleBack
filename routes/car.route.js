const express = require('express');
const app = express();
const CarModel = require('../db/models/car.model');

// Get all the lost cars in the database
app.get('/getall', async (req, res, next) => {
  const getAllCars = await CarModel.find({});
  try {
    res.send(getAllCars);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adding the lost car into the database
app.post('/add', async (req, res, next) => {
  const addCar = new CarModel(req.body);
  try {
    await addCar.save();
    res.send(addCar);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update module for the lost car if found
app.post('/update', async (req, res) => {
  const filter = {postID: req.body.postID};
  const update = {isActive: req.body.isActive};
  const updateCar = await CarModel.findOneAndUpdate(filter, update, {
    new: true,
  });
  try {
    if (updateCar) {
      res.status(200).json(updateCar);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
