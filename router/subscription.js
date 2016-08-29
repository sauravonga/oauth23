
var express = require('express');
var router = express.Router();

var subscriptionController = require('../controllers/subscription');
var userController = require('../controllers/user');
var authController = require('../controllers/auth');
var oauth2Controller = require('../controllers/oauth2');
var clientController = require('../controllers/client');

// Create endpoint handlers for /subscriptions
router.route('/subscriptions')
  .post(authController.isAuthenticated, subscriptionController.postSubscriptions)
  .get(authController.isAuthenticated, subscriptionController.getSubscriptions);

// Create endpoint handlers for /subscriptions/:subscription_id
router.route('/subscriptions/:subscription_id')
  .get(authController.isAuthenticated, subscriptionController.getSubscription)
  .put(authController.isAuthenticated, subscriptionController.putSubscription)
  .delete(authController.isAuthenticated, subscriptionController.deleteSubscription);


module.exports = router;
