"use strict";

var express = require("express");
var posts = require("./mock/posts.json");

var app = express();

app.use("/static", express.static(__dirname + "/public"));

app.set("view engine", "jade");
app.set("views", __dirname + "/views");

app.get("/", function(req, res) {
  res.render("index");
})

//added ? to make the title parameter optional
app.get("/blog/:title?", function(req, res){
  var title = req.params.title;
if (title === undefined) {
  //status for search engines to detect
  res.status(503);
  res.send("This page is under construction")
} else {
  var post = posts[title] || {};
  res.render("post", { post: post});
  }
});

app.listen(3000, function(){
  console.log("The frontend server is running on port 3000.")
});
