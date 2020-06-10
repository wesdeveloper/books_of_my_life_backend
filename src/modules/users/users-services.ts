import userModel from './user-model';

const createUser = async data => userModel.createUser(data);
const getUserById = async (id: number) => User.findOne(id);
const getAll = async () => userModel.getAll();

export default { createUser, getUserById, getAll };
