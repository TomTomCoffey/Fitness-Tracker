const http = require('http');  // Import the http module

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000; // Port number 3000 is used for development

const server = http.createServer((req, res) => { 

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello New Paltz From NODEMON');

});

server.listen(port, () => 
  console.log(`Server running at http://${hostname}:${port}/`)
);