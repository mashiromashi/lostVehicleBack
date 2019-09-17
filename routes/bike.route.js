const express = require('express');
const app = express();
const BikeModel = require('../db/models/bike.model');

// get all bike list for the admin
app.get('/getall', async (req, res, next) => {
  const getAllBike = await BikeModel.find({});
  try {
    res.send(getAllBike);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adding the lost bike into the database
app.post('/add', async (req, res) => {
  const addBike = new BikeModel(req.body);
  try {
    await addBike.save();
    res.send(addBike);
  } catch (err) {
    res.status(500).send(err);
  }
});

// update module the lost bike if found
app.post('/update', async (req, res) => {
  const filter = {postID: req.body.postID};
  const update = {isActive: req.body.isActive};
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
