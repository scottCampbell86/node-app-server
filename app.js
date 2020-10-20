const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<h1>Hello from my Node.js server!</h1>');
  res.write('</html>');
  res.end();
});

server.listen(3000);