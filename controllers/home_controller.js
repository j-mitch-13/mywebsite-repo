var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');



//Create a schema - this is a blueprint for our data
var todoSchema = new mongoose.Schema({
    item: String
});

var updateSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    message: String
});

var Todo = mongoose.model('Todo', todoSchema);
var Email = mongoose.model('Email', updateSchema);

var urlendcodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get(['/', '/home'], function(req, res){
        res.render(path.join(__dirname, '..' , '/public/html/index.ejs'));
        console.log('The home has been fired');
    });

    app.get('/25by25', function(req, res){
        res.render(path.join(__dirname, '..' , '/public/html/25by25.ejs'));
    });
    
    app.get('/moderndaymoneyball', function(req, res){
        res.render(path.join(__dirname, '..', '/public/html/moderndaymoneyball.ejs'));
    });

    app.get('/130days', function(req, res){
        res.render(path.join(__dirname, '..', '/public/html/130days.ejs'));
    });

    app.get('/resume', function(req, res){
        res.render(path.join(__dirname, '..', '/public/html/resume.ejs'));
    });


    app.get('/2081', function(req, res){
        res.render(path.join(__dirname, '..', '/public/html/2081.ejs'));
    });

    app.post(['/', '/home'], urlendcodedParser, function(req, res){
        console.log('A button has been clicked');
        //var newEmail = Email(req.body).save(function(err, data){
          //  if (err) 
            //    throw err;
            //res.json(data);
        //    });
    });
/*
The to-do controller
*/
    
//the get request
app.get('/todo', function(req, res){
    //get data from mongodb and pass it to the view
    Todo.find({}, function(err, data){
        if (err)
            throw err;
        res.render(path.join(__dirname, '..', '/public/html/todo.ejs'), {todos: data});
    });

});

//the post request to post data
app.post('/todo', urlendcodedParser, function(req, res){
    //get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
        if (err) 
            throw err;
        res.json(data);
        });
});

app.delete('/todo/:item', function(req, res){
    //delete the item from Mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
        if(err) throw data;
        res.json(data);
    });
});

}
