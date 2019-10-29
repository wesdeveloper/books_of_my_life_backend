const usersServices = require('./users-services');

const createUser = async (request, reply) => {
  const user = await usersServices.createUser(request.payload.body);
  return reply.status(201).send(user);
};

const getUserById = async (request, reply) => {
  const { id } = request.payload.params;
  const user = await usersServices.getUserById(id);
  return reply.status(200).send(user);
};

module.exports = { createUser, getUserById };
