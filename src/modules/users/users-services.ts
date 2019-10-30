import database from '../database';

const createUser = async data => database.User.create(data);
const getUserById = async id => database.User.findOne({ id });

export default { createUser, getUserById };
