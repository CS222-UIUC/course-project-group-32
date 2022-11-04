const express = require("express");
const Axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");


var db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'mysql'
})
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.post("/api/post/login", (require, response) => {
    const sqlSelect = "SELECT * FROM Users WHERE username = ? AND password = ?";
    db.query(sqlSelect, [require.body.username, require.body.password], (err, result) => {
        response.send(result);
        if (err) {
            console.log(err);
        }
    });
});

app.post("/api/insert/user", (require, response)=> {
    const username = require.body.username;
    const password = require.body.password;
    const firstname = require.body.firstname;
    const lastname = require.body.lastname;
    const sqlInsert = "INSERT INTO `Users` (`username`, `firstname`, `lastname`, `password`) VALUES (?, ?, ?, ?);"
    // // console.log(sqlInsert);
    db.query(sqlInsert, [username, firstname, lastname, password], (err, result) => {
        response.send(result);
        console.log(err);
    });
})

app.listen(3002, ()=> {
    console.log("running on port 3002");
})

// node index.js