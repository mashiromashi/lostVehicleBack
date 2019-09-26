const express = require('express');
const app = express();
const CarModel = require('../db/models/cars.model');

// Get all the lost cars in the database
app.get('/', async (req, res, next) => {
  const getAllCars = await CarModel.find({}).limit(20);
  if (getAllCars) {
    try {
      res.send(getAllCars);
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

// Adding the lost car into the database
app.post('/', async (req, res, next) => {
  const addCar = new CarModel(req.body);
  try {
    await addCar.save();
    res.send(addCar);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update module for the lost car if found
app.put('/:postId', async (req, res) => {
  const filter = { postID: req.params.postId };
  const update = { isActive: req.body.isActive };
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
