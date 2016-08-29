
var express = require('express');
var router = express.Router();

var courseController = require('../controllers/course');
var userController = require('../controllers/user');
var authController = require('../controllers/auth');
var oauth2Controller = require('../controllers/oauth2');
var clientController = require('../controllers/client');


router.route('/courses')
  .post(authController.isAuthenticated, courseController.postCourses)
  .get(authController.isAuthenticated, courseController.getCourses);

router.route('/courses/:course_id')
  .get(authController.isAuthenticated, courseController.getCourse)
  .put(authController.isAuthenticated, courseController.putCourse)
  .delete(authController.isAuthenticated, courseController.deleteCourse);

router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

router.route('/clients')
  .post(authController.isAuthenticated, clientController.postClients)
  .get(authController.isAuthenticated, clientController.getClients);

router.route('/oauth2/authorize')
  .get(authController.isAuthenticated, oauth2Controller.authorization)
  .post(authController.isAuthenticated, oauth2Controller.decision);

router.route('/oauth2/token')
  .post(authController.isClientAuthenticated, oauth2Controller.token);

module.exports = router;
