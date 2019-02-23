"use strict";

const express = require('express');
let app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/:sessionId', function (req, res) {
  res.send(req.params);
});

app.listen(port, () => console.log("Example app listening on port ${port} !"));