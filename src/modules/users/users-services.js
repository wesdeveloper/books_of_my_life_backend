const database = require('../database');

const createUser = data => database.User.create(data);

module.exports = { createUser };
