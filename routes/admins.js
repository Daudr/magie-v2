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
    Adminname: req.body.Adminname,
    password: req.body.password
  });

  Admin.addAdmin(newAdmin, (err, admin) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register Admin.'});
    } else {
      res.json({success: true, msg: 'Admin registered.'});
    }
  })
});

router.post('/authenticate', (req, res, next) => {
  const Adminname = req.body.Adminname;
  const password = req.body.password;

  Admin.getAdminByAdminname(Adminname, (err, admin) => {
    if (err) throw err;

    if (!admin) {
      return res.json({success: false, msg: 'Admin not found'});
    }

    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      if (err) throw err;

      if (isMatch) {
        const token = jwt.sign(Admin, config.secret, {
          expiresIn: 604800 // Una settimana
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          Admin: {   // Per non inviare la password creiamo un nuovo oggetto
            id: admin._id,
            name: admin.name,
            Adminname: admin.Adminname,
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
