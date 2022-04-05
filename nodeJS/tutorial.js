const Logger = require('./logger.js');

console.log(Logger);

const logger = new Logger.Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World');