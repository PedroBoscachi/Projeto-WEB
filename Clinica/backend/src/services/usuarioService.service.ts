import { DTOMapper } from './../converters/DTOMapper';
import { Usuario } from './../models/Usuario';
import { UsuarioRepository } from './../repositories/usuarioRepository';
import { UsuarioDTO } from './../Dtos/UsuarioDTO';


export class UsuarioService{

    constructor(private usuarioRepository: UsuarioRepository,
                private dtoMapper: DTOMapper){}
    
    saveUsuario(usuarioDTO: UsuarioDTO): UsuarioDTO{
        let usuario = this.dtoMapper.usuarioDTOToUsuario(usuarioDTO);
        let savedUsuario = this.usuarioRepository.saveUsuario(usuario);
        return this.dtoMapper.usuarioToUsuarioDTO(savedUsuario);
    }

    getUsuarios():UsuarioDTO[]{
        let usuarioDTOs = this.usuarioRepository.getUsuarios().map(u => this.dtoMapper.usuarioToUsuarioDTO(u))
        return usuarioDTOs
    }
}