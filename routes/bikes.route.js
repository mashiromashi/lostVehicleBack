const express = require('express');
const app = express();
const BikeModel = require('../db/models/bikes.model');

// get all bike list for the admin
app.get('/', async (req, res, next) => {
  const getAllBike = await BikeModel.find({}).limit(20);
  try {
    if (getAllBike) {
      send(getAllBike);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adding the lost bike into the database
app.post('/', async (req, res) => {
  const addBike = new BikeModel(req.body);
  try {
    await addBike.save();
    res.status(201).send(addBike);
  } catch (err) {
    res.status(500).send(err);
  }
});

// update module the lost bike if found
app.put('/update/:postId', async (req, res) => {
  const filter = { postID: req.body.postId };
  const update = { isActive: req.body.isActive };
  const updateBike = await BikeModel.findOneAndUpdate(filter, update, {
    new: true,
  });

  try {
    if (updateBike) {
      res.status(200).json(updateBike);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
