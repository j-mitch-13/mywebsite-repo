var express = require('express');
var home_controller = require('./controllers/home_controller');
var reading_controller = require('./controllers/reading_controller');
var path = require('path');
var mongoose = require('mongoose');
const { renderFile } = require('ejs');

var app = express();

app.set('view engine', 'ejs');

//middleware to use the static files
app.use(express.static(path.join(__dirname + '/public')));

//fire controllers
home_controller(app);
reading_controller(app);

//Connect to the database
mongoose.connect("mongodb://localhost:27017/ToDoListApp");

//Listens to a port
app.listen(3002, function(){
    console.log('I am listening on port 3002, hello world');
});