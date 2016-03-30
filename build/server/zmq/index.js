"use strict";
var path = require('path');
var zmq = require('zmq');
function connect() {
    var requester = zmq.socket('req');
    var x = 0;
    requester.on("message", function (reply) {
        console.log("Received reply", x, ": [", reply.toString(), ']');
        if (x === 10) {
            requester.close();
        }
    });
    requester.connect("tcp://localhost:5555");
    for (var i = 0; i < 10; i++) {
        console.log("Sending request", i, '…');
        requester.send("Hello");
    }
    process.on('SIGINT', function () {
        requester.close();
    });
}
exports.connect = connect;
