const path = require('path');
// const spawn = require('child_process').spawn,
//     py = spawn('python', [path.resolve('python/init.py')]);

import * as zmq from 'zmq';

export function connect() {
    var requester = zmq.socket('req');

    var x = 0;
    requester.on("message", (reply) => {
        console.log("Received reply", x, ": [", reply.toString(), ']');
        if (x === 10) {
            requester.close();
        }
    })

    requester.connect("tcp://localhost:5555");

    for (var i = 0; i < 10; i++) {
        console.log("Sending request", i, '…');
        requester.send("Hello");
    }

    process.on('SIGINT', function() {
        requester.close();
    });

}


