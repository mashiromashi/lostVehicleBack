const express = require("express");
const app = express();

const carModel = require("../db/models/car.model");
const bikeModel = require("../db/models/bike.model");

//car search in the database from the user input
app.get(
  "/getcarbyplate/:licensealphabet/:licensceplatenumber",
  async (req, res) => {
    const getCarByPlate = await carModel.findOne(req.params.licensePlate);
    try {
      res.send({
        userId: getCarByPlate.userId,
        contactNumber: getCarByPlate.contactNumber,
        licensePlate: getCarByPlate.licensePlate,
        brand: getCarByPlate.brand,
        model: getCarByPlate.model,
        engineNumber: getCarByPlate.engineNumber,
        isActive: getCarByPlate.isActive,
        imagePath: getCarByPlate.imagePath,
        createdAt: getCarByPlate.createdAt
      });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

//bike search in the database from the user input
app.get(
  "/getbikebyplate/:licenseplatealphabet/:licenseplatenumber",
  async (req, res) => {
    const getBikeByPlate = await bikeModel.findOne(req.params.licensePlate);
    try {
      res.send({
        userId: getBikeByPlate.userId,
        contactNumber: getBikeByPlate.contactNumber,
        licensePlate: getBikeByPlate.licensePlate,
        brand: getBikeByPlate.brand,
        model: getBikeByPlate.model,
        engineNumber: getBikeByPlate.engineNumber,
        isActive: getBikeByPlate.isActive,
        imagePath: getBikeByPlate.imagePath,
        createdAt: getBikeByPlate.createdAt
      });
    } catch (err) {
      res.status(500).send;
    }
  }
);

module.exports = app;
