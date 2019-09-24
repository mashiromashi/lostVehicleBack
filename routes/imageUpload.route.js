const express = require('express');
const multer = require('multer');
const app = express();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, `public/images/${req.body.licensePlate}`);
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname} `);
  },
});

const upload = multer({ storage: storage }).array('file');

app.post('/upload', function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

module.exports = app;
