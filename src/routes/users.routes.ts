import { Router } from 'express';

import { createUserController } from '../modules/accounts/useCases/createUser';
import { listUsersController } from '../modules/accounts/useCases/listUsers';

const usersRoutes = Router();

usersRoutes.get('/', (request, response) => {
  return listUsersController.handle(request, response);
});

usersRoutes.post('/', (request, response) => {
  return createUserController.handle(request, response);
});

export { usersRoutes };
