const express = require("express");
const app = express();

const carModel = require("../db/models/cars.model");
const bikeModel = require("../db/models/bikes.model");
const tuktukModel = require("../db/models/tuktuks.model");

// search car by brand and model
app.get("/getcarbybrandmodel/q=:/input", async (req, res) => {
  const input = req.params.userInput;
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
