// Load required packages
var Role = require('../models/checkacl/role');

// Create endpoint /api/roles for POST
exports.postRoles = function(req, res) {
  var role = new Role({
    roleId: req.body.roleId,
    roleName: req.body.roleName,
  });

  role.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'New role added!' });
  });
};

// Create endpoint /api/roles for GET
exports.getRoles = function(req, res) {
  Role.find(function(err, roles) {
    if (err)
      return res.send(err);
      res.json(roles);
  });
};