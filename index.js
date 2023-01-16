var passwords = require("dotenv").config();

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos')

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public/'));
app.use(express.static(__dirname + '/views'));

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.use('/api/todos', todoRoutes);

app.listen(port, function () {
  console.log(`App is running on http://localhost:${port}`);
});
