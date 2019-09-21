const express = require("express");
const app = express();
const TukTukModel = require("../db/models/tuktuk.model");

// Get all the lost tuk tuks in the databased
app.get("/getall", async (req, res, next) => {
  const getAllTukTuks = await TukTukModel.find({});
  try {
    res.send(getAllTukTuks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adding the lost tuktuk into the database
app.post("/add", async (req, res, next) => {
  const addTukTuk = new TukTukModel(req.body);
  try {
    await TukTukModel.save();
    res.send(addTukTuk, "Tuk Tuk Successfully added to the database");
  } catch (err) {
    res.status(500).send(err);
  }
});

// Updating the lost bike if found
app.post("/update", async (req, res) => {
  const filter = { postID: req.body.postID };
  const update = { isActive: req.body.isActive };
  const updateTukTuk = await TukTukModel.findOneAndUpdate(filter, update, {
    new: true,
  });

  try {
    if (updateTukTuk) {
      res.status(200).json(updateTukTuk);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
