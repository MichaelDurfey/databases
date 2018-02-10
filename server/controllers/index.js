var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results) {
        if (err) { throw err; }
        console.log('results', results[0]);
        res.send(results);
     
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body.text);
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
    }
  }
};

