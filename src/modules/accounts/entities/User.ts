import { v4 as uuid } from 'uuid';

class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  createdAt: Date;

  // construtor executa na criação da classe
  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
