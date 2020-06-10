import { Router } from 'express';
import schemas from './users-schemas';
import { validateBody, validateParam } from '../helpers';
import userController from './users-controller';

const router: Router = Router();

router
    .post(
      '/users',
      validateBody(schemas.createUser),
      userController.createUser,
    )
    .get(
      '/users/:id',
      validateParam(schemas.id, 'id'),
      userController.getUserById,
    )
    .get('/users', userController.getAll);

export default router;
