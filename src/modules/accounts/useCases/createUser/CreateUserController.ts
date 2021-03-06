import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { container } from 'tsyringe';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      const createUserUseCase = container.resolve(CreateUserUseCase);

      await createUserUseCase.execute({ name, email, password });

      return response.status(200).json();
    } catch (err) {
      return response.status(400).json({ err: 'User Already exists!' });
    }
  }
}

export { CreateUserController };
