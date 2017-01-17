
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('Был запрос');
  res.send('Hello World!');
});

app.listen(8000, function () {
  console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});
