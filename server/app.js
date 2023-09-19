const mysql = require("mysql");
const express = require("express");
const app = express();

const config = {
  host: "database-11.c2youriofb8l.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "12124545",
};

const con = mysql.createConnection(config);

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello Shanu",
  });
});

app.listen(3000);
