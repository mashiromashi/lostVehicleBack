const express = require("express");
const app = express();

const carModel = require("../db/models/car.model");
const bikeModel = require("../db/models/bike.model");
const tuktukModel = require("../db/models/tuktuk.model");

//filter car by license plate
app.get("/getcarbyplate/:licenseplate", async (req, res) => {
  const licensePlate = req.params.licenseplate;
  const getCarByPlate = await carModel.findOne({ licensePlate: licensePlate });

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
      createdAt: getCarByPlate.createdAt,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//filter bike by license plate
app.get("/getbikebyplate/:licenseplate", async (req, res) => {
  const licensePlate = req.params.licenseplate;
  const getBikeByPlate = await bikeModel.findOne({
    licensePlate: licensePlate,
  });
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
      createdAt: getBikeByPlate.createdAt,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

//filter tuktuk by license palte
app.get("/gettuktukbyplate/:licenseplate", async (req, res) => {
  const licensePlate = req.params.licenseplate;
  const getTukTukByPlate = await tuktukModel.findOne({
    licensePlate: licensePlate,
  });
  try {
    res.send({
      userId: getTukTukByPlate.userId,
      contactNumber: getTukTukByPlate.contactNumber,
      licensePlate: getTukTukByPlate.licensePlate,
      brand: getTukTukByPlate.brand,
      model: getTukTukByPlate.model,
      engineNumber: getTukTukByPlate.engineNumber,
      isActive: getTukTukByPlate.isActive,
      imagePath: getTukTukByPlate.imagePath,
      createdAt: getTukTukByPlate.createdAt,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
