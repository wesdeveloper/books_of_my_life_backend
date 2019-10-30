import schemas from './users-schemas';
import { validateBody } from '../helpers';
import userController from './users-controller';

const routes = async fastify => {
  fastify.post(
    '/users',
    { preHandler: validateBody(schemas.createUser) },
    userController.createUser,
  );
};

export default routes;
