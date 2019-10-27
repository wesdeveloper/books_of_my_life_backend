const database = require('../database');

const createUser = data => database.User.create(data);
const getUserById = data => database.User.findOne(data);

module.exports = { createUser, getUserById };
