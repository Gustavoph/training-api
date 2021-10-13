import { UsersRepository } from '../../repositories/implementations/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute({ name, email, password }: IRequest): void {
    const userExists = this.usersRepository.findByEmail(email);

    if (userExists) throw new Error('User Already exists!');

    this.usersRepository.create({ name, email, password });
  }
}

export { CreateUserUseCase };
