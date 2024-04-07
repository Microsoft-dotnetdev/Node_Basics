const http = require('http')
const fs = require('fs')

const html = fs.readFileSync(`${__dirname}/index.html`)
const json = require('./users.json')

http.createServer((req, res) => {

  res.end(JSON.stringify(json))

  //var obj = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf8'));

  /*var obj;
  fs.readFile(`${__dirname}/users.json`, 'utf8', (err, data) => {
    if (err) console.log(err)
    //obj = JSON.parse(data);
    res.end(data);
  }); */


}).listen(3001)



