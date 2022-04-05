const http = require('http');
const path = require('path');
const fs = require('fs');
const { connect } = require('http2');

const server = http.createServer((req, res) => {
    /*
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)
        => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);          
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home</h1>');
    }
    
    if(req.url === '/api/users'){
        const users = [
            {name: 'Jimmy', age: 18},
            {name: 'Johntavious', age: 26}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
        console.log(req.url);
    */

    //Build a file path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    //Extension on a file
    let extension = path.extname(filePath);

    //Initial content type
    let contentType = 'type/html';

    //Switch statement and set content type
    switch(extension) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //Read File
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                });
            } else {
                //Some server error (probably 500)
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else{
            //Success
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf8');
        }
    })
});
    
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

