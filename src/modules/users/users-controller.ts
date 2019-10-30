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

export default { createUser };
