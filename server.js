const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

app.set("view engine", "ejs"); //view engine will convert ejs code to html

app.use("/articles", articleRouter);
const articles = [
  {
    title: "Test Article",
    createdAt: new Date(),
    description: "Text description",
  },
  {
    title: "Test Article 2",
    createdAt: new Date(),
    description: "Text description 2",
  },
];
app.get("/", (req, res) => {
  res.render("articles/index", { articles: articles }); //render acess view folder
});

app.listen(5001);
