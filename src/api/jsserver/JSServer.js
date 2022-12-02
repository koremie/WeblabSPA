const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var mysqlConnection = mysql.createConnection(require('./db.config'));

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connection established succesfull");
    } else {
        console.log("Connection failed TwT" + err);
    }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.get("/animals", (req, res) => {
    mysqlConnection.query("SELECT * FROM animal", (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        } else {
            throw err;
        }
    });
});

app.get("/animals/filtered", (req, res) => {
    mysqlConnection.query("SELECT * FROM animal", (err, rows, fields) => {
        if (!err) {
            let dangerLevel = req.query.dangerLevel;
            let daysNotFed = req.query.daysNotFed;
            
            if(dangerLevel !== undefined) {
                rows = rows.filter(row => row.danger_level === dangerLevel);
            }
            if(daysNotFed !== undefined) {
                rows = rows.filter(row => row.days_not_fed >= +(daysNotFed.split('-')[0]) && row.days_not_fed <= +(daysNotFed.split('-')[1]));
            }
            res.send(rows);
        } else {
            throw err;
        }
    });
});

app.get("/animals/:id", (req, res) => {
    mysqlConnection.query('SELECT * FROM animal WHERE id=?', +(req.params.id),(err, rows, fields)=>{
        if(!err) {
            console.log(rows);
            res.send(rows);
        } else {
            throw err;
        }
    })
});

app.use(express.static('src'));