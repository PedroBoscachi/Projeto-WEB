import { User } from "../models/User";
import { DTOMapper } from "../helpers/DTOMapper";
import { UserRepository } from "../repositories/usuarioRepository";
import { UserDTO } from "../dtos/UserDTO";

export class UserService {
  constructor(
    private userRepository: UserRepository,
    private dtoMapper: DTOMapper
  ) {}

  saveUser(userDTO: UserDTO): UserDTO {
    let user = this.dtoMapper.userDTOToUser(userDTO);
    let savedusers = this.userRepository.saveUser(user);
    return this.dtoMapper.userToUserDTO(savedusers);
  }

  getUsers(): UserDTO[] {
    let usersDTOs = this.userRepository
      .getUsers()
      .map((user) => this.dtoMapper.userToUserDTO(user));
    return usersDTOs;
  }

  getUserbyCpf(cpf: string): UserDTO {
    let user = this.userRepository.getUserByCpf(cpf);
    return this.dtoMapper.userToUserDTO(user);
  }

  deleteUser(cpf: string): boolean {
    return this.userRepository.deleteUser(cpf);
  }
}
