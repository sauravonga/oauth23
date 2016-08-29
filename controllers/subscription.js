// Load required packages
var Subscription = require('../models/subscription');

// Create endpoint /api/subscriptions for POST
exports.postSubscriptions = function(req, res) {
  // Create a new instance of the Subscription model
  var subscription = new Subscription();

  // Set the subscription properties that came from the POST data
  subscription.name = req.body.name;
  subscription.type = req.body.type;
  subscription.subscriptionId = req.body.subscriptionId;
  subscription.userId = req.user._id;

  // Save the subscription and check for errors
  subscription.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Subscription added!', data: subscription });
  });
};

// Create endpoint /api/subscriptions for GET
exports.getSubscriptions = function(req, res) {
  // Use the Subscription model to find all subscription
  Subscription.find({ userId: req.user._id }, function(err, subscriptions) {
    if (err)
      return res.send(err);

    res.json(subscriptions);
  });
};

// Create endpoint /api/subscriptions/:subscription_id for GET
exports.getSubscription = function(req, res) {
  // Use the Subscription model to find a specific subscription
  Subscription.find({ userId: req.user._id, _id: req.params.subscription_id }, function(err, subscription) {
    if (err)
      return res.send(err);

    res.json(subscription);
  });
};

// Create endpoint /api/subscriptions/:subscription_id for PUT
exports.putSubscription = function(req, res) {
  // Use the Subscription model to find a specific subscription
  Subscription.update({ userId: req.user._id, _id: req.params.subscription_id }, { subscriptionId: req.body.subscriptionId }, function(err, num, raw) {
    if (err)
      return res.send(err);

    res.json({ message: num + ' updated' });
  });
};

// Create endpoint /api/subscriptions/:subscription_id for DELETE
exports.deleteSubscription = function(req, res) {
  // Use the Subscription model to find a specific subscription and remove it
  Subscription.remove({ userId: req.user._id, _id: req.params.subscription_id }, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Subscription removed from the locker!' });
  });
};