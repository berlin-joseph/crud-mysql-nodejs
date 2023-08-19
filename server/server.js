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

//
app.get("/", (req, res) => {
  db.query("SELECT * FROM Students", (err, data) => {
    if (err) {
      return res.json("error");
    } else {
      res.json(data);
    }
  });
});

//
app.post("/create", (req, res) => {
  db.query(
    "INSERT INTO Students(first_name,last_name,email) VALUES(?,?,?)",
    [req.body.firstName, req.body.lastName, req.body.email],
    (err, data) => {
      if (err) {
        return console.log(err);
      } else {
        return res.json(data);
      }
    }
  );
});

//
app.put("/update/:id", (req, res) => {
  db.query(
    "UPDATE Students SET firstName = ? lastName = ? email = ? WHERE ID = ?",
    [req.body.firstName, req.body.lastName, req.body.email,req.params.id],
    (err, data) => {
      if (err) {
        return console.log(err);
      } else {
        return res.json(data);
      }
    }
  );
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
