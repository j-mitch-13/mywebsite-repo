var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Create a schema - this is a blueprint for our data
var todoSchema = new mongoose.Schema({
    item: String
});

var todo = mongoose.model('todo', todoSchema);

var urlendcodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    //the get request
app.get('/todo', function(req, res){
    //get data from mongodb and pass it to the view
    todo.find({}, function(err, data){
        if (err)
            throw err;
        res.render(path.join(__dirname, '..', '/public/html/todo.ejs'), {todos: data});
    });

});

//the post request to post data
app.post('/todo', urlendcodedParser, function(req, res){
    //get data from the view and add it to mongodb
    var newTodo = todo(req.body).save(function(err, data){
        if (err) 
            throw err;
        res.json(data);
        });
    console.log('ToDo is fired');
});

app.delete('/todo/:item', function(req, res){
    //delete the item from Mongodb
    todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
        if(err) throw data;
        res.json(data);
    });
});
}