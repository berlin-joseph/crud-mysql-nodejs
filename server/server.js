const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const db = require("./config/db");
const cors = require("cors");

//json config
app.use(express.json());

//cors config
app.use(cors());

//dotenv path config
dotenv.config({ path: path.join(__dirname, ".", "config", "config.env") });

//db calling
db;

//get api -
app.get("/", (req, res) => {
  db.query("SELECT * FROM Students", (err, data) => {
    if (err) {
      return res.json("error");
    } else {
      res.json(data);
    }
  });
});

//post api - 
app.post("/create", (req, res) => {
  const sql = "INSERT INTO Students(first_name,last_name,email) VALUES(?,?,?)";
  const value = [req.body.firstName, req.body.lastName, req.body.email];
  db.query(sql, [...value], (err, data) => {
    if (err) {
      return console.log(err);
    } else {
      return res.json(data);
    }
  });
});

//put api -
app.put("/update/:id", (req, res) => {
  const sql =
    "UPDATE Students SET first_name = ? , last_name = ?, email = ? WHERE ID = ?";
  const value = [req.body.firstName, req.body.lastName, req.body.email];
  const id = req.params.id;
  db.query(sql, [...value, id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//delete api -
app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM STUDENTS WHERE ID = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
});

//server listening
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
