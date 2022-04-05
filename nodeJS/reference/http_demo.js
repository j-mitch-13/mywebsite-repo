const http = require('http');
const { runInNewContext } = require('vm');

//create a server object
http.createServer((req, res) => {
    //Write a response
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log('Server running...'));