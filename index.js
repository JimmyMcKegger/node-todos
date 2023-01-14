var passwords = require("dotenv").config();

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

var todoRoutes = require('./routes/todos')

app.get("/", function (req, res) {
  res.send({ Hello: "root" });
});

app.use('/api/todos', todoRoutes);

app.listen(port, function () {
  console.log("App is running on port " + port);
});