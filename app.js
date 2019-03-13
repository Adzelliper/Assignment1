var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var port = process.env.PORT || 3000;

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});


router.get('/login', function(req, res){
    res.sendFile(path.join(__dirname+'/login.html'));
});


router.get('/addGame', function(req, res){
    res.sendFile(path.join(__dirname+'/addGame.html'));
});

app.use('/', router);
app.listen(port, function(){
    console.log("server is running on port: " + port);
});