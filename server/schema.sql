DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages(
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT, 
  message varchar(300) NOT NULL, 
  roomname varchar(100) NOT NULL,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users(
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT, 
  username varchar(300) NOT NULL, 
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
 