const express = require("express");
const app = express();

const carModel = require("../db/models/cars.model");
const bikeModel = require("../db/models/bikes.model");
const tuktukModel = require("../db/models/tuktuks.model");

// search car by brand and model
app.get("/getcarbybrandmodel/q=:input", async (req, res) => {
  const input = req.params.input;
  const getCarByBrandModel = await carModel.find({
    $text: {
      $search: input
    }
  });
  if (getCarByBrandModel) {
    try {
      res.status(200).send(getCarByBrandModel);
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

// search bike by brand and model
app.get("/getbikebybrandmodel/q=:input", async (req, res) => {
  const input = req.params.input;
  const getBikeByBrandModel = await bikeModel.find({
    $text: {
      $search: input
    }
  });
  if (getBikeByBrandModel) {
    try {
      res.status(200).send(getBikeByBrandModel);
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

app.get("/gettuktukbybrandmodel/q=:input", async (req, res) => {
  const input = req.params.input;
  const getTukTukByBrandModel = await tuktukModel.find({
    $text: {
      $search: input
    }
  });
  if (getTukTukByBrandModel) {
    try {
      res.status(200).send(getTukTukByBrandModel);
    } catch (err) {
      res.status(500).send(err);
    }
  }
});

module.exports = app;
