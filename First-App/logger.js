const EventEmitter = require('events'); // event class

var url = "http://mylogger.io/log";

class Logger extends EventEmitter{
     log(message) { // Np need for function keyword inside class
        // Send an HTTP request
        console.log(message);
    
        // Raise an event
     this.emit('messageLogged', {id: 1, url: "http://"});
    }
}


module.exports = Logger;
