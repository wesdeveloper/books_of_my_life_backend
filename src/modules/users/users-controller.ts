import usersServices from './users-services';

const createUser = async (req, res) => {
  try {
    console.info('createUser started', req.body);
    const user = await usersServices.createUser(req.body);

    return res.status(201).send(user);
  } catch (error) {
    console.error('createUser error', error.message);
    return res.status(500).send();
  }
};

const getUserById = async (req, res) => {
  const { id } = req.payload.params;
  const user = await usersServices.getUserById(id);
  return res.status(200).send({user: { name: 'teste', id}});
};

const getAll = async (req, res) => {
  try {
    const users = await usersServices.getAll();
    return res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
};

export default { createUser, getUserById, getAll };
