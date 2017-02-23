var express = require('express');
var app = express();
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static('public'));
app.listen(8000);
// app.get('/', function(request, response){
// });
