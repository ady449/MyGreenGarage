// import express from "ECMS/node_modules/express";
express = require("express");

mysql = require('mysql')
const connection = mysql.createPool({
  host     : 'localhost', // Your connection adress (localhost).
  user     : 'root',     // Your database's username.
  password : '',        // Your database's password.
  database : 'ecms',   // Your database's name.
  connectionLimit : 10 // Maximum number of
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/cars', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM cars', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
      console.log(results)
    //   console.log(res)
    });
  });
});


// Starting our server.
app.listen(8163, () => {
 console.log('Go to http://localhost:8080/cars so you can see the data.');
});
// adb -s emulator-5554 reverse tcp:8163 tcp:8163

// export default results;