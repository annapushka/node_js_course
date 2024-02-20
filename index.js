// const crypto = require('crypto');

// const dotenv = require('dotenv');

// dotenv.config();
// console.log(process.env.PORT);
// console.log(process.env.NODE_ENV);

// const start = Date.now();

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//     console.log('1 end', Date.now() - start)
// });

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//     console.log('2 end', Date.now() - start)
// });

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//     console.log('3 end', Date.now() - start)
// });

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//     console.log('4 end', Date.now() - start)
// });

// crypto.pbkdf2('123ttt', '5', 1000000, 64, 'sha512', () => {
//     console.log('5 end', Date.now() - start)
// });

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     res.end('<h1>Server started successfully!<button>SSR</button></h1>')
// });

// const server = http.createServer((req, res) => {
//         res.writeHead(200, {
//         'Content-Type': 'application/json'
//     });
//     if(req.url === '/') return res.end(JSON.stringify({name: 'John'}))
//     if(req.url === '/about') return res.end('About Page')
// });



const Router = require('./framework/Router.js');
const Application = require('./framework/Application.js');

const PORT = process.env.PORT || 3000;

const router = new Router();
const app = new Application();

router.get('/main', (req, res) => {
    res.end('You send request to /main');
});

router.get('/about', (req, res) => {
    res.end('You send request to /about');
});

app.addRouter(router);

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
