var http = require('http')
var server = http.createServer((req, res) => {
  res.write("<h1>NODY HODDY</h1>")
  res.end("Welcome to node")
}).listen(5000)