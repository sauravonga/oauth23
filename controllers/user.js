// Load required packages
var User = require('../models/checkacl/user');

// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
  var user = new User({
    userid: req.body.userid,
    username: req.body.username,
  });

  user.save(function(err) {
    if (err)
      return res.send(err);

    res.json({ message: 'New user added!' });
  });
};

// Create endpoint /api/users for GET
exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err)
      return res.send(err);
    res.json(users);
  });
};

/*
 Project.find({
        subscriber : '57c4fec4210deff7186d7bab'  //req.userId
      })
     .populate('subscriber')
     //.populate('group')
     .exec(function(err, projects){
          res.json(projects);
     })
*/
/*exports.getUsers = function(req, res) {
  User.findOne({ username : Saurav })
  .populate('roleId') // only return the Persons name
  .exec(function (err, users) {
    res.json(users);
  })
};*/