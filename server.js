"use strict";

var express = require('express');
var app = express();
const port = 3000;
app.set('view engine', 'pug');



// serving static files, such as index.html
//app.use(express.static(__dirname));


app.get('/', function(req, res){
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})
/*
app.get('/:sessionId', function (req, res) {
  res.send(req.params);
});
*/

app.listen(port, () => {
  console.log("Example app listening on port " + port)
});
