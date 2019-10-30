import schemas from './users-schemas';
import { validateBody, validateParam } from '../helpers';
import userController from './users-controller';

const routes = async fastify => {
  fastify
    .post(
      '/users',
      { preHandler: validateBody(schemas.createUser) },
      userController.createUser,
    )
    .get(
      '/users/:id',
      { preHandler: validateParam(schemas.id, 'id') },
      userController.getUserById,
    );
};

export default routes;
