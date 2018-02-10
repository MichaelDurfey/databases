var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

//get all messages

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect();


getAllMessages = function(callback) {
  var queryStringGetAllMessages = 'SELECT * FROM messages;';
  connection.query(queryStringGetAllMessages, function(err, data) {
    if (err) { throw err; }
    console.log('get all messages', data);
    data = JSON.stringify(data);
    callback(err, data);  
  });
};

getAllUsers = function(callback) {
  var queryStringGetAllUsers = 'SELECT * FROM users;';
  connection.query(queryStringForGetAllUsers, function(err, data) {
    if (err) { throw err; }
    callback(err, data);
  });
};

postAMessage = function(message) {
  var QueryMessage = 'INSERT into messages (message) VALUES (?);';
  connection.query(QueryMessage, message, function(err, data) {
    if (err) { throw err; }
    console.log(data);
  });
};

postAUser = function(user) {
  console.log(user);
  var newUser = 'INSERT into users (username) VALUES (?);';
  connection.query(newUser, user, function(err, data) {
    if (err) { throw err; }
    console.log(data);
  });
};


exports.getAllUsers = getAllUsers;
exports.getAllMessages = getAllMessages;
exports.postAMessage = postAMessage;
exports.postAUser = postAUser;
