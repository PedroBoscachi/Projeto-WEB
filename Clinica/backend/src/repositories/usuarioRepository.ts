import { User } from "../models/User";

const listUsers: User[] = [];

export class UserRepository {
  saveUser(user: User): User {
    listUsers.push(user);
    return user;
  }

  getUsers(): User[] {
    return listUsers;
  }

  getUserByCpf(cpf: string): User {
    return listUsers.find((user) => user.cpf === cpf);
  }

  deleteUser(cpf: string): boolean {
    listUsers.forEach((user, index) => {
      if (user.cpf === cpf) {
        listUsers.splice(index, 1);
        return true;
      }
    });
    return false;
  }
}
