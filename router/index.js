
var express = require('express');
var router = express.Router();

var courseController = require('../controllers/course');
var authController = require('../controllers/auth');
var oauth2Controller = require('../controllers/oauth2');
var clientController = require('../controllers/client');
var mindController = require('../controllers/mind');

router.route('/users')
  .post(mindController.postUsers)
  .get(authController.isAuthenticated, mindController.getUsers);

router.route('/clients')
  .post(authController.isAuthenticated, clientController.postClients)
  .get(authController.isAuthenticated, clientController.getClients);

router.route('/oauth2/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);

router.route('/oauth2/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);

module.exports = router;
