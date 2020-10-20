const http = require('http');
const fs = require('fs');
const { isRegExp } = require('util');

  //create our server and define a function that fires everytime a request comes in;
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<h1>Enter Message</h1>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  // res.setHeader('Content-Type', 'text/html');
  // res.write('<html>');
  // res.write('<h1>Hello from my Node.js server!</h1>');
  // res.write('</html>');
  // res.end();
});

  //initialze our server to 'listen' for events;
server.listen(3000);