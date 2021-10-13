import { Request, Response } from 'express';
import { ListUsersUseCase } from './ListUsersUseCase';

class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const users = this.listUsersUseCase.execute();

      return response.status(200).json(users);
    } catch (err) {
      return response.status(500).json({ err: 'Server Error' });
    }
  }
}

export { ListUsersController };
