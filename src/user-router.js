const Router = require('../framework/Router');

const router = new Router();

const users = [
    {
        id: 1,
        name: 'Alex'
    },
    {
        id: 2,
        name: 'Vlad'
    }
]

router.get('/users', (req, res) => {
    res.send(users);
});

module.exports = router;