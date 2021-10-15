import { User } from '../../entities/User';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
