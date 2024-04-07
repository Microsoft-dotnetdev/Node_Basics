var express = require('express');

var app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Node Express");
})

var port = process.env.PORT || 4000

app.listen(port, () => {
  console.log('Server listening in port ', port)
})