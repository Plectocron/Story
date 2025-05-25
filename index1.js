import express from "express";
import superheroes from "superheroes";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  let name = superheroes.random();
  let sidekickName = superheroes.random();
  res.send(`<h1>Behold, I am ${name}! And this time, I have no sidekick.</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
