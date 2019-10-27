const usersServices = require('./users-services');

const createUser = async (request, reply) => {
  const user = await usersServices.createUser(request.payload.body);
  return reply.status(201).send(user);
};

module.exports = { createUser };
