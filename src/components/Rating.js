var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/BookStore");
var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});

var app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/insert", function (req, res) {
  var name = req.body.name;
  var popularity= req.body.popularity;
  

  var data = {
    bookname: bookname,
    reviews: reviews,
    rating:rating,
  };
  db.collection("users").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });

  return res.sendFile(__dirname + "/success.html");
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.sendFile(__dirname + "/rrinsert.html");
  })
  .listen(3001);

console.log("server listening at port 3001");