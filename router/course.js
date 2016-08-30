
var express = require('express');
var router = express.Router();

var courseController = require('../controllers/course');
var userController = require('../controllers/user');

var userRoleController = require('../controllers/userrole');
var rolePermController = require('../controllers/roleperm');

var modController = require('../controllers/mod');
var roleController = require('../controllers/role');


var authController = require('../controllers/auth');
var oauth2Controller = require('../controllers/oauth2');
var clientController = require('../controllers/client');

router.route('/users')
  .post(userController.postUsers)
  .get(userController.getUsers);

router.route('/userroles')
  .post(userRoleController.postUserroles)
  .get(userRoleController.getUserroles);

router.route('/roleperms')
  .post(rolePermController.postRoleperms)
  .get(rolePermController.getRoleperms);

router.route('/role')
  .post(roleController.postRoles)
  .get(roleController.getRoles);

router.route('/mod')
  .post(modController.postMods)
  .get(modController.getMods);


router.route('/courses')
  .post(authController.isAuthenticated, courseController.postCourses)
  .get(authController.isAuthenticated, courseController.getCourses);

router.route('/courses/:course_id')
  .get(authController.isAuthenticated, courseController.getCourse)
  .put(authController.isAuthenticated, courseController.putCourse)
  .delete(authController.isAuthenticated, courseController.deleteCourse);


module.exports = router;