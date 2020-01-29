var express = require("express");
var bodyParser = require("body-parser");
var app = express;

app.use(bodyParser.urlencoded({ extended: true}));

app.use(function(req,res,next) {
    var log = '用户IP地址：' + req.connection.remoteAddress;
    console.log(log);
    next()
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/www/index.html')
});

app.post('/regist', function(req,res){
    var user= req.body.user;
    var email=req.body.email;
    var boards = req.body.boards;

    var html = '昵称：' + user + <br> +
               '电邮：' + email + <br> +
               '特长：' + boards.toString();
    res.send(html);
});

app.get('*', function(req,res) {
    res.status(404);
    res.send('网页去哪了 :( ');
});

app.listen(5455, function(req,res){
    console.log('web post service on working');
});