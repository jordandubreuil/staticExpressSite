var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

//Setup for first route
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/Views/index.html"));
});
/*
//Setup for about route
app.get('/about', function(req, res){
    res.sendFile(path.join(__dirname+"/Views/about.html"));
});

//Setup for about route
app.get('/contact', function(req, res){
    res.sendFile(path.join(__dirname+"/Views/contact.html"));
});
*/
app.use(express.static(__dirname+'/Views'));

app.use('/', router);



app.listen(3000, function(){
    console.log("Server is running on port 3000");
});