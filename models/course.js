// Load required packages
var mongoose = require('mongoose');

// Define our course schema
var CourseSchema   = new mongoose.Schema({
  name: String,
  type: String,
  courseId: Number,
  userId: String
});

// Export the Mongoose model
module.exports = mongoose.model('Course', CourseSchema);