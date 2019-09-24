const express = require('express');
const app = express();
const UserModel = require('../db/models/users.model');
const bcrypt = require('bcrypt');

// Get all user list for admin
app.get('/getall', async (req, res, next) => {
  const getAllUser = await UserModel.find({});
  try {
    if (getAllUser) {
      res.send(getAllUser);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// Register new user
app.post('/register', async (req, res) => {
  const user = new UserModel(req.body);
  // const userRole = req.body.role;

  try {
    if (user) {
      await user.save();
      res.status(200).send('User Successfully Registered');
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// User Login module
app.post('/login', async (req, res) => {
  UserModel.findOne({
    email: req.body.email,
    password: req.body.password,
  }).exec(function(err, user) {
    if (err) callback(err);
    else if (!user) {
      res.status(404).send('User not found');
    }
    bcrypt.compare(UserModel.password, req.body.password, function(
      err,
      isMatch,
    ) {
      if (isMatch === true) {
        return null, user;
      } else {
        return err;
      }
    });
  });
});

// User update module for Admin
app.post('/update', async (req, res) => {
  const filter = { email: req.body.email };
  const update = { role: req.body.role };
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
  const filter = { email: req.body.email };
  const update = { isActive: req.body.isActive };

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
