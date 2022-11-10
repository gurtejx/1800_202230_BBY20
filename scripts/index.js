const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(8000, () => {
  console.log('listening on *:8000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });