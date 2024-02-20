const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Banana',
    }
]

const getUser = (req, res) => {
    if(req.params.id) {
        res.send(users.find(user => user.id === +req.params.id));
    }
    res.send(users);
}

const addUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(user);
}

module.exports = { getUser, addUser };