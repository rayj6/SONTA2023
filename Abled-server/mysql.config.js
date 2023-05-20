const mysql = require("mysql");

// Create a connection pool
const connection = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "abled",
    port: 3307,
});

module.exports = connection;
