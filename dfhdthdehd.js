const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

import { cvRoutes } from './routes/cv.routes';
import { database } from './config/context/database.js';


app.use('/cv', cvRoutes);

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database');
});

// Serve static files from the "webpage" directory
app.use(express.static('webpage'));

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Render the login page
//app.get('/', (req, res) => {
//    res.send('Hello to website API'); 
//})

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/webpage/login.html');
});

// Handle the login form submission
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Query the database to check if the username and password match
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (error, results) => {
    if (error) {
      console.error('Error executing the query: ', error);
      return;
    }

    if (results.length === 1) {
      // Login successful, redirect to another HTML page
      res.sendFile(__dirname + 'cv.html');
    } else {
      // Login failed, redirect back to the login page
      res.redirect('/');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});