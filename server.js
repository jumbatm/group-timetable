"use strict";

var express = require('express');
var app = express();
const port = 3000;

// putting image in body
app.use(express.static(__dirname));


app.get('/', (req, res) => res.send('Hello world!'));

/*
app.get('/:sessionId', function (req, res) {
  res.send(req.params);
});
*/

app.listen(port, () => console.log("Example app listening on port ${port} !"));
