const path = require('path');

console.log(path.join('first', 'second', 'third'));
console.log(path.join(__dirname, 'first', 'second', 'third'));
console.log(path.join(__dirname, '..'));
console.log(path.join(__dirname, '..', '..'));
console.log(path.resolve('first', 'second', 'third'));
console.log(path.resolve(__dirname, 'first', 'second', 'third.js'));
console.log(path.parse(path.resolve(__dirname, 'first', 'second', 'third.js')));

// --------------

const siteURL = 'http://localhost:8080/users?id=5123';
const url = new URL(siteURL);
console.log(url);