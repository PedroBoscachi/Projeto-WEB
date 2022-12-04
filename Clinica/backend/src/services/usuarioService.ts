import { User } from "../models/User";
import { DTOMapper } from "../helpers/DTOMapper";
import { UserRepository } from "../repositories/usuarioRepository";
import { UserDTO } from "../dtos/UserDTO";
import { UserFormDTO } from "../dtos/UserFormDTO";
import { UsersValidator } from "../validators/UsersValidator";
import { response } from "express";

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private dtoMapper: DTOMapper,
    private validator: UsersValidator
  ) {}

  saveUser(userFormDTO: UserFormDTO): UserDTO {
    if (this.validator.validateForm(userFormDTO)) {
      let user = this.dtoMapper.userFormDTOToUser(userFormDTO);
      let savedUsers = this.userRepository.saveUser(user);
      return this.dtoMapper.userToUserDTO(savedUsers);
    } else {
      throw new Error("Usuário Inválido!");
    }
  }

  getUsers(): UserDTO[] {
    let usersDTOs = this.userRepository
      .getUsers()
      .map((user) => this.dtoMapper.userToUserDTO(user));
    return usersDTOs;
  }

  getUserbyCpf(cpf: string): UserFormDTO {
    let user = this.userRepository.getUserByCpf(cpf);
    if (user == null) throw new Error("Falha na autenticação");
    return this.dtoMapper.userToUserFormDTO(user);
  }

  getMyProfilebyCpf(cpf: string): UserDTO {
    let user = this.userRepository.getUserByCpf(cpf);
    if (user == null) throw new Error("Falha na autenticação");
    return this.dtoMapper.userToUserDTO(user);
  }

  deleteUser(cpf: string): boolean {
    return this.userRepository.deleteUser(cpf);
  }
}
