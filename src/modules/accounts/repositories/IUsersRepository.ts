import { User } from '../entities/User';

// DTO => Data transfer object
// Receber da rota para o repositorio
interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUsersRepository {
  findByEmail(name: string): Promise<User | undefined>;
  list(): Promise<User[]>;
  create({ name, email, password }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };
