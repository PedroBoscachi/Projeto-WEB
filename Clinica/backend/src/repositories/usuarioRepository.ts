import { UserDTO } from "../dtos/UserDTO";
import { User } from "../models/User";

const listUsers: User[] = [{
  id: '1dd55d1c-c25b-4148-a630-11babfc03669',
  name: '111111',
  lastName: '11111',
  cpf: '11111111111',
  phone: '11111111111',
  birthDate: new Date('2022-12-23T03:00:00.000Z'),
  password: '$2b$10$e098yl.zIFesksWZyYmNDuIFrYw.Qx2c56SwDvHRv/vEGesSzLfXC'
}];

export class UserRepository {
  saveUser(user: User): User {
    console.log(user)
    listUsers.push(user);
    return user;
  }

  getUsers(): User[] {
    return listUsers;
  }

  getUserByCpf(cpf: string): User {
    return listUsers.find((user) => user.cpf === cpf);
  }

  updateUser(user: User): User {
    let updatedUser: User = null;
    listUsers.forEach((existingUser) => {
      if (existingUser.cpf == user.cpf) {
        existingUser.name = user.name;
        existingUser.lastName = user.lastName;
        existingUser.birthDate = user.birthDate;
        existingUser.phone = user.phone;
        existingUser.password = user.password;
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
