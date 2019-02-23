"use strict";

var express = require('express');
var app = express();
const port = 3000;
app.set('view engine', 'pug');



// serving static files, such as index.html
//app.use(express.static(__dirname));


app.get('/', function(req, res){
  res.render('index', { 
    url: "http://localhost:3000/dynamic_view"
  });
});

// http://localhost:3000/dynamic_view
app.get('/dynamic_view', function(req, res){
  res.render('dynamic', {
     url:"http://google.com"
  });
});


app.listen(port, () => {
  console.log("Example app listening on port " + port)
});
