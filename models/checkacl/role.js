// Load required packages
var mongoose = require('mongoose');

// Define our client schema
var rolesSchema = new mongoose.Schema({
    roleId: String,
    roleName: String
});

// Export the Mongoose model
module.exports = mongoose.model("roles", rolesSchema);