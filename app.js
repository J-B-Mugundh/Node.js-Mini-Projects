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

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     res.end('hello world');
// });

// console.log('port 3000');
// server.listen(3000, '127.0.0.1');

// Readable stream in Nodejs

// const fs = require('fs');

// const readStream = fs.createReadStream(__dirname + '/README.md');

// readStream.on('data', (chunk) => {
//     console.log('data read => \n' + chunk);
// })

// Writeable Stream in Nodejs

// const fs = require('fs');

// const readStream = fs.createReadStream(__dirname + '/README.md', 'utf-8');
// const writeStream = fs.createWriteStream(__dirname + '/write-me.txt');

// readStream.on('data', (chunk) => {
//     console.log('data read => \n' + chunk);
//     writeStream.write(chunk);
// })

// Pipe in Nodejs

// const fs = require('fs');

// const readStream = fs.createReadStream(__dirname + '/README.md', 'utf-8');
// const writeStream = fs.createWriteStream(__dirname + '/write-me.txt');

// readStream.pipe(writeStream);

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/plain'});
//     const readStream = fs.createReadStream(__dirname + '/README.md', 'utf-8');

//     readStream.pipe(res);
    
// })

// server.listen(3000, '127.0.0.1');

// Serving HTML page

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'text/html'});
//     const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');

//     readStream.pipe(res);
    
// })

// server.listen(3000, '127.0.0.1');

// Serving Json Data

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-type': 'application/json'});
    
//     const person = {
//         name: 'Mugundh',
//         age: 19,
//         job: 'developer'
//     }

//     res.end(JSON.stringify(person));
// })

// server.listen(3000, '127.0.0.1');

// Routing in Nodejs
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html').pipe(res);
//     }
//     else if(req.url === '/about-me'){
//         res.writeHead(200, {'Content-type': 'text/html'});
//         fs.createReadStream(__dirname + '/about.html').pipe(res);
//     }
//     else{
//         res.writeHead(200, {'Content-type': 'text/html'});
//         fs.createReadStream(__dirname + '/404.html').pipe(res);
//     }
// })

// server.listen(3000, '127.0.0.1');

// Express 

// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//     res.send("Home page");
// })

// app.get('/about', (req, res) => {
//     res.send("About page");
// })


// app.get('/profile/:name', (req, res) => {
//     res.send("Profile name is : " + req.params.name);
// })

// app.listen(3000);

// Template Engines

// const express = require('express');

// const app = express();

// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// })

// app.get('/about', (req, res) => {
//     res.sendFile(__dirname + '/about.html');
// })


// app.get('/profile/:name/:id', (req, res) => {
//     const data = {age: 21, job: 'developer', friends: ['Iaruto', 'Itachi', 'Shikadai']}
//     res.render('profile', {person: req.params.name, id: req.params.id, data : data}); // By default, it will go search in views folder
// })

// app.listen(3000);

// Partial views
// const express = require('express');

// const app = express();

// app.set('view engine', 'ejs');

// app.use('/assets', express.static('assets')); // Middleware 
// app.get('/', (req, res) => {
//     res.render('index');
// })

// app.get('/about', (req, res) => {
//     // query string
//     // console.log(req.query) 
//     res.render('about', {qs: req.query});
// })


// app.get('/profile/:name/:id', (req, res) => {
//     const data = {age: 21, job: 'developer', friends: ['Iaruto', 'Itachi', 'Shikadai']}
//     res.render('profile', {person: req.params.name, id: req.params.id, data : data}); // By default, it will go search in views folder
// })

// app.listen(3000);

// Body parser - POST request in Nodejs

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false }) // Middleware
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets')); // Middleware 
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    // query string
    // console.log(req.query) 
    res.render('about', {qs: req.query});
})

app.post('/about', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.render('about-success', {data: req.body});
})


app.get('/profile/:name/:id', (req, res) => {
    const data = {age: 21, job: 'developer', friends: ['Iaruto', 'Itachi', 'Shikadai']}
    res.render('profile', {person: req.params.name, id: req.params.id, data : data}); // By default, it will go search in views folder
})

app.listen(3000);





