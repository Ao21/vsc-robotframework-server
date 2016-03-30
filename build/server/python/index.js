"use strict";
var path = require('path');
var spawn = require('child_process').spawn, py = spawn('python', [path.resolve('python/init.py')]), data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var dataString = '';
py.stdout.on('error', function (data) {
    console.log(data);
});
py.stdout.on('data', function (data) {
    dataString += data.toString();
});
py.stdout.on('end', function () {
    console.log('Sum of numbers=', dataString);
});
py.stdin.write(JSON.stringify(data));
py.stdin.end();
function pythonFunction() {
    console.log('hi');
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = pythonFunction;
