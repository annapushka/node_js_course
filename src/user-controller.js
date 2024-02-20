const User = require('./user-model');

const getUser = async (req, res) => {
    let users;
    if(req.params.id) {
        users = await User.findById(req.params.id);
    } else {
        users = await User.find();
    }
    res.send(users);
}

const addUser = async (req, res) => {
    const user = req.body;
    await User.create(user);
    res.send(user);
}

module.exports = { getUser, addUser };