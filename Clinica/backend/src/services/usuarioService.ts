import { Usuario } from './../models/Usuario';
import { DTOMapper } from "../helpers/DTOMapper";
import { UsuarioRepository } from "../repositories/usuarioRepository";
import { UsuarioDTO } from "../Dtos/UsuarioDTO";

export class UsuarioService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private dtoMapper: DTOMapper
  ) {}

  saveUser(userDTO: UsuarioDTO): UsuarioDTO {
    let user = this.dtoMapper.usuarioDTOToUsuario(userDTO);
    let savedusers = this.usuarioRepository.saveUser(user);
    return this.dtoMapper.usuarioToUsuarioDTO(savedusers);
  }

  getUsers(): UsuarioDTO[] {
    let usersDTOs = this.usuarioRepository
      .getUsers()
      .map((user) => this.dtoMapper.usuarioToUsuarioDTO(user));
    return usersDTOs;
  }

  getUserbyCpf(cpf: string): UsuarioDTO {
    let user = this.usuarioRepository.getUserByCpf(cpf);
    return this.dtoMapper.usuarioToUsuarioDTO(user);
  }

  deleteUser(cpf: string): boolean {
    return this.usuarioRepository.deleteUser(cpf);
  }
}
