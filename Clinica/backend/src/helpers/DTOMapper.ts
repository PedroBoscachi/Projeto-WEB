import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";
import { SchedulingDTO } from "../dtos/SchedulingDTO";
import { Scheduling } from "../models/Scheduling";
import { UserDTO } from "../dtos/UserDTO";
import { User } from "../models/User";
export class DTOMapper {
  userDTOToUser(userDTO: UserDTO): User {
    return new User(
      userDTO.name,
      userDTO.lastName,
      userDTO.cpf,
      userDTO.phone,
      userDTO.birthDate
    );
  }

  userToUserDTO(user: User): UserDTO {
    return new UserDTO(
      user.name,
      user.lastName,
      user.cpf,
      user.phone,
      user.birthDate
    );
  }

  agendamentoToAgendamentoDTO(agendamento: Agendamento): AgendamentoDTO {
    return new AgendamentoDTO(
      agendamento.id,
      agendamento.tipoExame,
      agendamento.nomeExame,
      agendamento.usuario,
      agendamento.medico,
      agendamento.preco,
      agendamento.data
    );
  }

  schedulingDTOToScheduling(schedulingDTO: SchedulingDTO): Scheduling {
    return new Scheduling(
      schedulingDTO.typeExam,
      schedulingDTO.nameExam,
      schedulingDTO.user,
      schedulingDTO.doctor,
      schedulingDTO.price,
      schedulingDTO.date
    );
  }

  schedulingFormDTOToScheduling(
    schedulingFormDTO: SchedulingFormDTO,
    foundUser: User
  ): Scheduling {
    return new Scheduling(
      schedulingFormDTO.typeExam,
      schedulingFormDTO.nameExame,
      foundUser,
      agendamentoFormDTO.medico,
      agendamentoFormDTO.preco,
      agendamentoFormDTO.data
    );
  }
}
