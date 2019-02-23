"use strict";

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
let app = express();
const port = 3000;

// connect to the db and start the express server
let db;

const url =  'mongodb://localhost:21017/clicks';

MongoClient.connect(url, (err, database) => {
  if(err) {
    return console.log(err);
  }
  db = database;
  // start the express web server listening on 3000
  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/:sessionId', function (req, res) {
  res.send(req.params);
});

app.listen(port, () => console.log("Example app listening on port ${port} !"));

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// add a document to the DB collection recording the click event
app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
  console.log(click);
  console.log(db);

  db.collection('clicks').save(click, (err, result) => {
    if (err) {
      return console.log(err);
    }
    console.log('click added to db');
    res.sendStatus(201);
  });
});
