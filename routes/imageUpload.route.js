const express = require("express");
const multer = require("multer");
const app = express();
const fs = require("fs");
// const globalImagePath = require('../util/imagePath');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, `public/images/${req.body.licensePlate}`);
  },
  filename: function(req, file, cb) {
    cb(null, `${req.body.licensePlate}+${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage }).array("file");

app.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

app.get("/getallimages", function(req, res) {
  fs.readdir("public/images", (err, files) => {
    try {
      console.log(files);
      res.status(200).send(files);
    } catch (err) {
      res.status(500).send(err);
    }
  });
});

app.get("/getimage/:licenseplate", function(req, res) {
  fs.readdir("public/images", (err, file) => {
    try {
      console.log(file);
      res.status(200).send(file);
    } catch (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = app;
