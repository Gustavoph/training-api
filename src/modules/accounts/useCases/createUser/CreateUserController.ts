import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email, password } = request.body;

      this.createUserUseCase.execute({ name, email, password });

      return response.status(200).json();
    } catch (err) {
      return response.status(400).json({ err: 'User Already exists!' });
    }
  }
}

export { CreateUserController };
