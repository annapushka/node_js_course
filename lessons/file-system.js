const fs = require('fs');
const path = require('path');

// fs.mkdirSync(path.join(__dirname, 'dir'));
// fs.mkdirSync(path.join(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true});
// fs.mkdir(path.join(__dirname, 'dir'), (err) => {
//     if (err) {
//         return console.log(err);
//     };
//     console.log('Directory created');
// })

// fs.rmdir(path.join(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     };
//     console.log('Directory deleted');
// })

// fs.writeFileSync(path.join(__dirname, 'file.txt'), 'Hello world', (err) => {
//     if (err) {
//         throw err;
//     };
//     console.log('File created');
// });

// fs.appendFile(path.join(__dirname, 'file.txt'), 'Happy end', (err) => {
//     if (err) {
//         throw err;
//     };
//     console.log('File edited');
// });

const writeFileAsync = async (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

const appendFileFileAsync = async (filePath, data) => {
    return new Promise((resolve, reject) => {
        fs.appendFile(filePath, data, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

const readFileAsync = async (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
}

const removeFileAsync = async (filePath) => {
    return new Promise((resolve, reject) => {
        fs.rm(filePath, (err) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

// writeFileAsync(path.join(__dirname, 'file.txt'), 'Hello world')
//     .then(() => console.log('File created'))
//     .then(() => appendFileFileAsync(path.join(__dirname, 'file.txt'), 'Happy end'))
//     .then(() => console.log('File edited'))
//     .then(() => readFileAsync(path.join(__dirname, 'file.txt')))
//     .then(data => console.log(data))
//     .then(() => removeFileAsync(path.join(__dirname, 'file.txt')))
//     .then(() => console.log('File deleted'))
//     .catch(err => console.log(err));

const text = process.env.TEXT || '';

writeFileAsync(path.join(__dirname, 'file.txt'), text)
    .then(() => readFileAsync(path.join(__dirname, 'file.txt')))
    .then(data => data.split(' ').length)
    .then(wordsCount => writeFileAsync(path.join(__dirname, 'wordsCount.txt'), `Words count: ${wordsCount}`))
    .then(() => console.log('File created'))
    .then(() => removeFileAsync(path.join(__dirname, 'file.txt')))
    .then(() => console.log('File deleted'))
    .catch(err => console.log(err));
