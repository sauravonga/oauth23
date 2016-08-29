// Load required packages
var Course = require('../models/course');

// Create endpoint /api/courses for POST
exports.postCourses = function(req, res) {
  // Create a new instance of the Course model
  var course = new Course();

  // Set the course properties that came from the POST data
  course.name = req.body.name;
  course.type = req.body.type;
  course.courseId = req.body.courseId;
  course.userId = req.user._id;

  // Save the course and check for errors
  course.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Course added!', data: course });
  });
};

// Create endpoint /api/courses for GET
exports.getCourses = function(req, res) {
  // Use the Course model to find all course
  Course.find({ userId: req.user._id }, function(err, courses) {
    if (err)
      return res.send(err);

    res.json(courses);
  });
};

// Create endpoint /api/courses/:course_id for GET
exports.getCourse = function(req, res) {
  // Use the Course model to find a specific course
  Course.find({ userId: req.user._id, _id: req.params.course_id }, function(err, course) {
    if (err)
      return res.send(err);

    res.json(course);
  });
};

// Create endpoint /api/courses/:course_id for PUT
exports.putCourse = function(req, res) {
  // Use the Course model to find a specific course
  Course.update({ userId: req.user._id, _id: req.params.course_id }, { courseId: req.body.courseId }, function(err, num, raw) {
    if (err)
      return res.send(err);

    res.json({ message: num + ' updated' });
  });
};

// Create endpoint /api/courses/:course_id for DELETE
exports.deleteCourse = function(req, res) {
  // Use the Course model to find a specific course and remove it
  Course.remove({ userId: req.user._id, _id: req.params.course_id }, function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'Course removed from the locker!' });
  });
};