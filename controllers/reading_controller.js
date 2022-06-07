const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");


//Create schema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    year_published: Number,
    year_read: Number
});

const Book = mongoose.model('Book', bookSchema);

//Try middleware

var urlendcodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/reading', function(req, res){
        Book.find({}, function(err, data){
            if(err)
                throw err;
                res.render(path.join(__dirname, '..', '/public/html/reading.ejs'), {books: data});
        });
        console.log('The reading controller has been fired');
    });

    //This is to test the sort by ASC title
    app.post('/reading', urlendcodedParser, function(req, res){
        console.log('A button has been clicked');
    });
}