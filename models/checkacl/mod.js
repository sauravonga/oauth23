// Load required packages
var mongoose = require('mongoose');

// Define our client schema
 var modulesSchema = new mongoose.Schema({
     modId: String,
     modName: String,
     modPath: String
 });


// Export the Mongoose model
module.exports = mongoose.model("mods", modulesSchema);
