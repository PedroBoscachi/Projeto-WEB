import { UserDTO } from "../dtos/UserDTO";
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

  updateUser(user: UserDTO): User {
    let updatedUser: User = null
    listUsers.forEach((existingUser) => {
      if (existingUser.cpf == user.cpf) {
        existingUser.name = user.name;
        existingUser.lastName = user.lastName;
        existingUser.birthDate = user.birthDate;
        existingUser.phone = user.phone;
        updatedUser = existingUser;
      }
    });
    return updatedUser;
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
