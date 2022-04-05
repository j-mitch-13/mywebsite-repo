const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(msg){
        //Raise an event
        this.emit('message', {id:9, msg});
    }
}

const num1 = 1;

module.exports.Logger = Logger;
module.exports.num1 = num1;
