import database from '../database';

const createUser = data => database.User.create(data);

export default { createUser };
