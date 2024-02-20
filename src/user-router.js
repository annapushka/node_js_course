const Router = require('../framework/Router');
const { getUser, addUser } = require('./user-controller');

const router = new Router();

router.get('/users', getUser);

router.post('/users', addUser);

module.exports = router;