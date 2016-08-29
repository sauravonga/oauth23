// Load required packages
var mongoose = require('mongoose');

// Define our subscription schema
var SubscriptionSchema   = new mongoose.Schema({
  name: String,
  type: String,
  subscriptionId: Number,
  userId: String
});

// Export the Mongoose model
module.exports = mongoose.model('Subscription', SubscriptionSchema);