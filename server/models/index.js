var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.getAllMessages(callback); 
        
    }, // a function which produces all the messages
    post: function (message, room) {
      // console.log(message, room, typeof message)
      db.postAMessage (message, room);
      console.log(message, room, typeof message);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.getAllUsers(callback);
    },
    post: function (user) {
      db.postAUser(user);
    }
  }
};

