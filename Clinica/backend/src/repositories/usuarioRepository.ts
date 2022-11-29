import { Usuario } from "./../models/Usuario";

const listUsers: Usuario[] = [];

export class UsuarioRepository {
  saveUser(user: Usuario): Usuario {
    listUsers.push(user);
    return user;
  }

  getUsers(): Usuario[] {
    return listUsers;
  }

  getUserByCpf(cpf: string): Usuario {
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
