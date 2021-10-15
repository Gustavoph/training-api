import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { listUsersController } from '../modules/accounts/useCases/listUsers';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.get('/', (request, response) => {
  return listUsersController.handle(request, response);
});

usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
