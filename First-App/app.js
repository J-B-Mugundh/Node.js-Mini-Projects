// // Event Handling 

// const EventEmitter = require('events'); // event class
// //const emitter = new EventEmitter(); // event object

// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener
// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });
 
// logger.log('message');

// const { Socket } = require('dgram');
// const http = require('http');

// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('New connection...')
// });

// server.listen(3000);

// console.log('Listening on port 3000');

const { Socket } = require('dgram');
const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/home'){
        res.write('Hello World');
    }

    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});


server.listen(3000);

console.log('Listening on port 3000');

//We use Express API for clean structure to handle various routes. 
// Internally, Express framework is built on top of HTTP module in node


