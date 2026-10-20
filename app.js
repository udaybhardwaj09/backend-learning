const eventEmitter = require('events');

const customEmitter = new eventEmitter();

customEmitter.on('response', (name, id) => {
    console.log(`data recieved of user : ${name} of id : ${id}`);
})
customEmitter.emit('response', 'john', 34);