import { UsersRepository } from '../../repositories/implementations/UsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: UsersRepository
  ) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) throw new Error('User Already exists!');

    this.usersRepository.create({ name, email, password });
  }
}

export { CreateUserUseCase };
