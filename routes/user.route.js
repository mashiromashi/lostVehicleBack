const express = require('express');
const app = express();
const UserModel = require('../db/models/user.model');

// Get all user list for admin
app.get('/getall', async (req, res, next) => {
  const getAllUser = await userModel.find({});
  try {
    res.send(getAllUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Register new user
app.post('/register', async (req, res) => {
  const user = new UserModel(req.body);
  try {
    await user.save();
    res.status(200).send('User Successfully Registered');
  } catch (err) {
    res.status(500).send(err);
  }
});

// User Login module
app.get('/login', async (req, res) => {
  const loginUser = await userModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  try {
    if (loginUser) {
      console.log('logged in');
      res
          .status(200)
          .json({isActive: loginUser.isActive, role: loginUser.role});
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// User update module for Admin
app.post('/update', async (req, res) => {
  const filter = {email: req.body.email};
  const update = {role: req.body.role};
  const updateUser = await userModel.findOneAndUpdate(filter, update, {
    new: true,
  });
  try {
    if (updateUser && req.body.role === 'Admin') {
      console.log(res.statusCode);
      res.send(updateUser);
      res.send('User updated successfully');
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// User delete module for Admin
// (not actually delete just to make it inactive and hide from the frontend)
app.post('/delete', async (req, res) => {
  const filter = {email: req.body.email};
  const update = {isActive: req.body.isActive};

  const deleteUser = await userModel.findOneAndUpdate(filter, update, {
    new: true,
  });

  try {
    if (deleteUser && req.body.role === 'Admin') {
      res.send('User Deleted Successfully');
      res.send(deleteUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
