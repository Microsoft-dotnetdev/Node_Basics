var http = require('http')

var fs = require('fs')
var server = http.createServer((req, res) => {
  fs.readFile('./data/users.json', 'utf-8', (err, data) => {
    res.write(data);
    res.end()
  })
})


/* var rawJsonData = require('./data/users.json');
var server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json"
  })
  res.end(JSON.stringify(rawJsonData))
})
 */
server.listen(5000)