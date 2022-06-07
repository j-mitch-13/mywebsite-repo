var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var updateSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    message: String
});


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
    


}
