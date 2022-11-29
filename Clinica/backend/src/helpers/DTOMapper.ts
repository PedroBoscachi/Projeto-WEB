import { AgendamentoDTO } from "../dtos/AgendamentoDTO";
import { Agendamento } from "../models/Agendamento";
import { UsuarioDTO } from "../dtos/UsuarioDTO";
import { Usuario } from "../models/Usuario";
export class DTOMapper {
  usuarioDTOToUsuario(usuarioDTO: UsuarioDTO): Usuario {
    return new Usuario(
      usuarioDTO.nome,
      usuarioDTO.sobrenome,
      usuarioDTO.cpf,
      usuarioDTO.telefone,
      usuarioDTO.dataNascimento
    );
  }

  usuarioToUsuarioDTO(usuario: Usuario): UsuarioDTO {
    return new UsuarioDTO(
      usuario.nome,
      usuario.sobrenome,
      usuario.cpf,
      usuario.telefone,
      usuario.dataNascimento
    );
  }

  agendamentoToAgendamentoDTO(agendamento: Agendamento): AgendamentoDTO {
    return new AgendamentoDTO(
      agendamento.tipoExame,
      agendamento.nomeExame,
      agendamento.usuario,
      agendamento.medico,
      agendamento.preco,
      agendamento.data
    );
  }

  agendamentoDTOToAgendamento(agendamentoDTO: AgendamentoDTO): Agendamento {
    return new Agendamento(
      agendamentoDTO.tipoExame,
      agendamentoDTO.nomeExame,
      agendamentoDTO.usuario,
      agendamentoDTO.medico,
      agendamentoDTO.preco,
      agendamentoDTO.data
    );
  }
}
