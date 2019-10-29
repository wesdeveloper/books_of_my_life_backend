const database = require('../database');

const createUser = data => database.User.create(data);
const getUserById = id => database.User.findOne({
    where: {
        id: id
    }
});

module.exports = { createUser, getUserById };
