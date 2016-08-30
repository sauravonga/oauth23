var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Define our user schema
var UserSchema = new mongoose.Schema({
  userid: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);