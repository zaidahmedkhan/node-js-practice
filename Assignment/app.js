const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {

        res.setHeader('Content-Type', 'text/html')
        res.write("<html>");
        res.write("<head><title>Assignment 1</title></head>");
        res.write("<body><p>welcome to my page 1</p></body>");
        res.write("</html>");
        return res.end();


    }

    if (url === "/users") {
        res.setHeader('Content-Type', 'text/html')
        res.write("<html>");
        res.write("<head><title>Assignment 1</title></head>");
        res.write("<body><p>welcome to my page 2</p></body>");
        res.write("</html>");
        return res.end();

    }



});

server.listen(3000)