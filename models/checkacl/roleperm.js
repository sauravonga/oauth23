// Load required packages
var mongoose = require('mongoose');

var rolePermSchema = new mongoose.Schema({
     roleId: String,
     modId: String
 });
 
// Export the Mongoose model
module.exports = mongoose.model("roleperms", rolePermSchema);
