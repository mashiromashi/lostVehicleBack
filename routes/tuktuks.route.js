const express = require("express");
const app = express();
const TukTukModel = require("../db/models/tuktuks.model");

// Get all the lost tuk tuks in the databased
app.get("/", async (req, res, next) => {
  const getAllTukTuks = await TukTukModel.find({}).limit(20);
  try {
    res.status(200).send(getAllTukTuks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Adding the lost tuktuk into the database
app.post("/", async (req, res, next) => {
  const addTukTuk = new TukTukModel(req.body);
  try {
    await addTukTuk.save();
    res.status(201).send(addTukTuk);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Updating the lost bike if found
app.put("/:postId", async (req, res) => {
  const filter = { postId: req.params.postId };
  const update = { isActive: req.body.isActive };
  const updateTukTuk = await TukTukModel.findOneAndUpdate(filter, update, {
    new: true
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
