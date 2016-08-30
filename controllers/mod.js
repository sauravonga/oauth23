// Load required packages
var Mod = require('../models/checkacl/mod');

// Create endpoint /api/mods for POST
exports.postMods = function(req, res) {
  var mod = new Mod({
    modId: req.body.modId,
    modName: req.body.modName,
    modPath: req.body.modPath,
  });

  mod.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'New mod added!' });
  });
};

// Create endpoint /api/mods for GET
exports.getMods = function(req, res) {
  Mod.find(function(err, mods) {
    if (err)
      return res.send(err);

    res.json(mods);
  });
};


