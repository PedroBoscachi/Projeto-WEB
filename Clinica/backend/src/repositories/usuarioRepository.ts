import { UsuarioDTO } from './../Dtos/UsuarioDTO';
import { Usuario } from './../models/Usuario';

const listUsers: Usuario[] = [];

export class UsuarioRepository{
    
    saveUsuario(usuario: Usuario): Usuario{
        listUsers.push(usuario);
        return usuario;
    }

    getUsuarios(): Usuario[]{
        return listUsers
    }
}