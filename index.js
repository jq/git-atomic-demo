var port = 3000
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

// Start the server at a predefined port
app.listen(port)
