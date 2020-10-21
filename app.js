const http = require('http');
const routes = require('./routes');

  //create our server and define a function that fires everytime a request comes in;
const server = http.createServer(routes);

  //initialze our server to 'listen' for events;
server.listen(3000);