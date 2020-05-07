const express = require("express");
const app = express();

app.set('view engine', 'ejs'); //view engine will convert ejs code to html

app.get("/", (req, res) => {
  res.render('index');
});

app.listen(5001);
