var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { throw err; }
        res.send(results);
     
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
        console.log("heres the message!" , req.body);
      models.messages.post(req.body.message, req.body.roomname);
      res.sendStatus(200);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) { throw err; }
        res.send(results);
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username);
      res.sendStatus(200);
    }
  }
};

