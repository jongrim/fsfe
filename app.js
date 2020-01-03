const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/teapot", (req, res) => {
  res.status(418);
  res.set("X-TEAPOT", "true");
  res.send("I prefer coffee");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
