const express = require("express");
const mysqlConfig = require("./mysql.config.js");
const app = express();

const PORT = 3300;

app.get("/", (req, res) => {
    res.send("Test server");
});

// Functions below is used for fetch all data from database then post to server in path "/users"
app.get("/users", (req, res) => {
    // Execute a query
    mysqlConfig.query("SELECT * FROM users", (error, results) => {
        if (error) {
            console.error("Error executing query:", error);
            res.status(500).send("Error retrieving users");
        } else {
            res.json(results);
            console.log(results);
        }
    });
});

// Function insertUser is used for register new user
function insertUser(username, email, password, callback) {
    // Create an SQL query
    const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

    // Execute the query
    mysqlConfig.query(query, [username, email, password], (error, results) => {
        if (error) {
            console.error("Error executing query:", error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

// Function updateUser can be used to update a user when have user ID
function updateUser(userId, username, email, password, callback) {
    // Create an SQL query
    const query = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`;

    // Execute the query
    mysqlConfig.query(query, [username, email, password, userId], (error, results) => {
        if (error) {
            console.error("Error executing query:", error);
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
}

// updateUser(1, "John", "john@example.com", "AdminPassword", (error, results) => {
//     if (error) {
//         console.error("Error updating user:", error);
//     } else {
//         console.log("User updated successfully:", results);
//     }
// });

// insertUser("RayJohnson", "ray@example.com", "12345678", (error, results) => {
//     if (error) {
//         console.error("Error inserting user:", error);
//     } else {
//         console.log("User inserted successfully:", results);
//     }
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
