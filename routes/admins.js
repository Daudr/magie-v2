const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const Admin = require('../models/admin');
const config = require('../config/database');

// Register
router.post('/register', (req, res, next) => {
  let newAdmin= new Admin({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addAdmin(newAdmin, (err, admin) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user.'});
    } else {
      res.json({success: true, msg: 'User registered.'});
    }
  })
});

router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getAdminByUsername(username, (err, admin) => {
    if (err) throw err;

    if (!admin) {
      return res.json({success: false, msg: 'Admin not found'});
    }

    User.comparePassword(password, admin.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // Una settimana
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {   // Per non inviare la password creiamo un nuovo oggetto
            id: admin._id,
            name: admin.name,
            username: admin.username,
            email: admin.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

module.exports = router;
