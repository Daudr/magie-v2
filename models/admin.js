const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const adminSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = module.exports = mongoose.model('Admin', adminSchema);

module.exports.getAdminById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

// Incapsulazione
module.exports.addAdmin = function(newAdmin, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if (err) throw err;
      newAdmin.password = hash;
      newUser.save(callback);
    })
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;

    callback(null, isMatch);
  });
}
