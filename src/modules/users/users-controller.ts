import usersServices from './users-services';

const createUser = async (request, reply) => {
  try {
    request.log.info('createUser started');
    const user = await usersServices.createUser(request.payload.body);
    request.log.info('createUser finished');
    return reply.status(201).send(user);
  } catch (error) {
    request.log.error('createUser error', error.message);
    return reply.status(500).send();
  }
};

const getUserById = async (request, reply) => {
  const { id } = request.payload.params;
  const user = await usersServices.getUserById(id);
  return reply.status(200).send(user);
};

export default { createUser, getUserById };
