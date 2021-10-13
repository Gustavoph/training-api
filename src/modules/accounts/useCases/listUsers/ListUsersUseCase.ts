import { User } from '../../entities/User';
import { UsersRepository } from '../../repositories/implementations/UsersRepository';

class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute(): User[] {
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
