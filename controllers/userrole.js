// Load required packages
var Userrole = require('../models/checkacl/userrole');

// Create endpoint /api/userroles for POST
exports.postUserroles = function(req, res) {
  var userrole = new Userrole({
    roleId: req.body.roleId,
    userId: req.body.userId,
  });

  userrole.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'New userrole added!' });
  });
};

// Create endpoint /api/userroles for GET
exports.getUserroles = function(req, res) {
  Userrole.find(function(err, userroles) {
    if (err)
      return res.send(err);

    res.json(userroles);
  });
};