var express = require('express');
var mongoose = require('mongoose');
var app = express();
var path = require('path');
var bodyparser = require('body-parser');
var router = express.Router();

app.use(bodyparser());
app.use(express.json());

//connect to mongodb database
mongoose.connect('mongodb://localhost:27017/gameentries',{
    
}).then(function(){
    console.log('MongoDB is connected');
}).catch(function(err){
    console.log(err);
});

//load game model
require('./models/GameEntry');
var GameEntry = mongoose.model('game');


//Setup for first route
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/Views/index.html"));
});

//Setup Post Route for game entry
app.post('/gamePost', function(req,res){

    console.log("Request Made");
    console.log(req.body);
    new GameEntry(req.body).save().then(function(){
        res.redirect('/about.html');
    });
});

app.get('/about', function(req, res){
    GameEntry.find({}).then(function(game){
        res.json({game});
    });
});

app.post('/deleteGame', function(req, res){
    console.log('Game Deleted' , req.body._id);
    GameEntry.findByIdAndDelete(req.body._id).exec();
    res.redirect('/about');
    
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