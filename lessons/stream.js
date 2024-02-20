const fs = require('fs');
const path = require('path');

// fs.readFile(path.join(__dirname, 'input.txt'), (err, data) => {
//     if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(data);
// });

// const stream = fs.createReadStream(path.join(__dirname, 'input.txt'));

// stream.on('data', (chunk) => {
//     console.log(chunk);
// })

// stream.on('open', () => {
//     console.log('Open');
// });
// stream.on('end', () => {
//     console.log('End');
// });
// stream.on('error', (err) => {
//     console.error(err);
// });

const writableStream = fs.createWriteStream(path.join(__dirname, 'output.txt'));
for (let i = 0; i < 20; i++) {
    writableStream.write(i + '\n');
}
writableStream.end();
writableStream.close();
writableStream.destroy();

const http = require('http');

http.createServer((req, res) => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'input.txt'));
    readableStream.pipe(res);
});