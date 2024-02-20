const Emmiter = require('events');

const emmiter = new Emmiter();

const callback = (data, second, third) => {
    console.log(data);
    console.log(second);
    console.log(third);
}

emmiter.on('message', callback)

const MESSAGE = process.env.MESSAGE || '';

if(MESSAGE) {
    emmiter.emit('message', MESSAGE, 2, 3);
} else {
    emmiter.emit('message', 'No message');
};

emmiter.removeListener('message', callback);
emmiter.removeAllListeners();
