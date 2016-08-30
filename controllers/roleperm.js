// Load required packages
var Roleperm = require('../models/checkacl/roleperm');

// Create endpoint /api/roleperms for POST
exports.postRoleperms = function(req, res) {
  var roleperm = new Roleperm({
    roleId: req.body.roleId,
    modId: req.body.modId,
  });

  roleperm.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'New roleperm added!' });
  });
};

// Create endpoint /api/roleperms for GET
exports.getRoleperms = function(req, res) {
  Roleperm.find(function(err, roleperms) {
    if (err)
      return res.send(err);

    res.json(roleperms);
  });
};