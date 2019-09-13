const express = require("express");
const app = expres();
const tuktukModel = require("../db/models/tuktuk.model");

//Get all the lost tuk tuks in the databased
app.get("/getall", async (req, res, next) => {
  const getAllTukTuks = await tuktukModel.find({});
  try {
    res.send(getAllTukTuks);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Adding the lost tuktuk into the database
app.get("/add", async (req, res, next) => {
  const addTukTuk = new tuktukModel(req.body);
  try {
    await tuktukModel.save();
    res.send(addTukTuk, "Tuk Tuk Successfully added to the database");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
