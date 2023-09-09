// Global Objects

//console.log("Hello World!");

// let count = 0;
// const timer = setInterval(() => {
//     count = count + 2;
//     console.log(`${count} seconds have passed`);
//     if(count > 6)
//         clearInterval(timer);
// }, 2000);

// console.log(__dirname);

//console.log(__filename);

// Functions in Node js

// function callbackFunc(func){
//     func();
// }

// let red = function(){
//     console.log('hi there');
// }

// callbackFunc(red);

// Modules and Require in Node JS

// const helper = require('./helper');

// console.log(helper.user("Mugundh"));
// console.log(helper.id(11));
// console.log(helper.user("mugundhjb@gmail.com"));

// Event emitter

// const events = require('events');

// const myEmitter = new events.EventEmitter;

// myEmitter.on('test', function(arg){
//     console.log(arg);
// })

// myEmitter.emit('test', 'hello world'); // Manually emitting this event 
// where 1st arg => event that we want to admit, 2nd arg => arg to be passed to the function

// Server in Nodejs

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('hello world');
});

console.log('port 3000');
server.listen(3000, '127.0.0.1');