const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter {

}

// Init Object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => console.log('Event Fired!'));
myEmitter.on('traps', () => console.log('The trap is trapping'));
myEmitter.on();

//Init event
myEmitter.emit('event');
myEmitter.emit('traps');
