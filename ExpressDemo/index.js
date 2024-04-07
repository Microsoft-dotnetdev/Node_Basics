var express = require('express');
var fs = require('fs')
//var users = require("../data/users.json");


var app = express();
// Middleware
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to Node Express");
})

app.get("/users", async (req, res) => {
  const users = await getUserAsync();
  res.status(200).send(users)
})

app.get("/users/:id", async (req, res) => {
  const id = req.params.id
  const users = await getUserAsync();
  const user = users.find(user => user.id == id)
  res.status(200).send(user);
})

app.post("/users", async (req, res) => {
  let users = await getUserAsync();
  users.push(req.body);
  //setUsers(users)
  let newUsersObject = JSON.stringify(users, null, 2);
  fs.writeFile('./data/users.json', newUsersObject, () => {
    res.status(201).send("Created");
  });

})
// SYNC Methods
const getUsers = () => {
  //let users = fs.readFileSync(path.join(__dirname, '../data/users.json'));
  let data = fs.readFileSync('./data/users.json');
  return JSON.parse(data);
};

const setUsers = (users) => {
  let newUsersObject = JSON.stringify(users, null, 2);
  fs.writeFileSync('./data/users.json', newUsersObject);
};
// SYNC Methods

// ASYNC
const { open } = require('node:fs/promises');

const getUserAsync = async () => {
  const file = await open('./data/users.json');
  const data = await file.readFile();
  file.close();
  return JSON.parse(data);
  /* 
    for await (const line of file.readLines()) {
      console.log(line);
    } */
};

var port = process.env.PORT

app.listen(port, () => {
  console.log('Server listening in port ', port)
})