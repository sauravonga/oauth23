// Load required packages
var mongoose = require('mongoose');

var userRoleSchema = new mongoose.Schema({
      roleId: String,
      userId: String
 });

// Export the Mongoose model
module.exports = mongoose.model("userroles", userRoleSchema);