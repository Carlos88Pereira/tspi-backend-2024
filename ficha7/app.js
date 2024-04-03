const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log("Servidor funcionando na porta", port);
});

// MySQL Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ficha7"
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
    }
    console.log("Connected to MySQL");
});

// Query MySQL
connection.query("SELECT * FROM people", (err, results, fields) => {
    if (err) {
        console.error("Error querying MySQL:", err);
        return;
    }
    console.log("Results:", results);
});
