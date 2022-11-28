import { AgendamentoDTO } from './../Dtos/AgendamentoDTO';
import { Agendamento } from './../models/Agendamento';
import { UsuarioDTO } from '../Dtos/UsuarioDTO';
import { Usuario } from '../models/Usuario';
export class DTOMapper{

    usuarioDTOToUsuario(usuarioDTO: UsuarioDTO): Usuario{
        return new Usuario(
            usuarioDTO.nome,
            usuarioDTO.sobrenome,
            usuarioDTO.cpf,
            usuarioDTO.telefone,
            usuarioDTO.dataNascimento
          );
    }

    usuarioToUsuarioDTO(usuario: Usuario): UsuarioDTO{
        return new UsuarioDTO(
            usuario.nome,
            usuario.sobrenome,
            usuario.cpf,
            usuario.telefone,
            usuario.dataNascimento
          );
    }

    /* agendamentoToDTO(agendamento: Agendamento): AgendamentoDTO{
        return new AgendamentoDTO(
            agendamento.tipoExame,
            agendamento.data
        );
    }

    agendamentoDTOToEntity(agendamentoDTO: AgendamentoDTO): Agendamento{
        return new Agendamento(
            agendamentoDTO.tipoExame,
            agendamentoDTO.data
        );
    } */
}