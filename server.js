const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');

app.set('view engine', 'ejs'); //view engine will convert ejs code to html

app.use('/articles', articleRouter)

app.get("/", (req, res) => {
  res.render('index'); //render acess view folder
});

app.listen(5001);
