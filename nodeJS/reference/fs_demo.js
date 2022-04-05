const fs = require('fs');
const path = require('path');

/*
//create folder (directory)
fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
    if(err) throw err;
    console.log('Folder created...');
}); */

//create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'this is using a text file', function(err){
    if(err) throw err;
    console.log('File written to...');
});

//Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});