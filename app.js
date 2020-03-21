var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mysql = require('mysql');
var db = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo',
    port: 3000
});

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signup', signupRouter);

db.connect( function(err) {  
    if (err)throw err; 
     
    console.log("Connected!");  
    var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'req.body.name', 'req,body,password')";  
    db.query(sql, function (err, result) {  
    if (err) throw err;  
    console.log("1 record inserted");  
    })
});  
    

module.exports = app;
