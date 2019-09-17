const express = require('express');
const app = express();
const laptopModel = require('../db/models/laptop.model');

// Get all the lost laptops in the database
app.get('/getall', async (req, res, next) => {
  const getAllLaptops = await laptopModel.find({});
  try {
    res.send(getAllLaptops);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adding the lost laptop into the database
app.get('/add', async (req, res, next) => {
  const addLaptop = await laptopModel(req.body);
  try {
    await addLaptop.save();
    res.send(addLaptop, 'Laptop Successfully added to the database');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
