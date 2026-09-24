const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
    res.write("Hello, node.");
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

//Use npx nodemon hello_node.js for auto-restart of server on changes