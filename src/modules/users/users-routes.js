const { schemas } = require('./users-schemas');
const { validateBody } = require('../helpers');
const userController = require('./users-controller');

const routes = async fastify => {
  fastify.post(
    '/users',
    { preHandler: validateBody(schemas.createUser) },
    userController.createUser,
  );

  fastify.get('/users/:id', userController.getUserById);
};

module.exports = routes;
