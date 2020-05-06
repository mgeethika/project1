var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/onlineBookStore");
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

app.post("/sign_up", function (req, res) {
  var name = req.body.name;
  var contact= req.body.contact;
  var address = req.body.address;
  var email = req.body.email;

  var data = {
    name: name,
    contact: contact ,
    address: address,
    email: email,
  };
  db.collection("users").insertOne(data, function (err, collection) {
    if (err) throw err;
    console.log("Record inserted Successfully");
  });

  return res.sendFile(__dirname + "/signup_success.html");
});

app
  .get("/", function (req, res) {
    res.set({
      "Access-control-Allow-Origin": "*",
    });
    return res.sendFile(__dirname + "/ainsert.html");
  })
  .listen(8088);

console.log("server listening at port 8088");
