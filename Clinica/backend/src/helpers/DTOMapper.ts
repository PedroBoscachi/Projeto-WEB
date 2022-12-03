import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";
import { SchedulingDTO } from "../dtos/SchedulingDTO";
import { Scheduling } from "../models/Scheduling";
import { UserDTO } from "../dtos/UserDTO";
import { UserFormDTO } from "../dtos/UserFormDTO";
import { User } from "../models/User";
export class DTOMapper {
  userFormDTOToUser(userFormDTO: UserFormDTO): User {
    return new User(
      userFormDTO.name,
      userFormDTO.lastName,
      userFormDTO.cpf,
      userFormDTO.phone,
      userFormDTO.birthDate,
      userFormDTO.password
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

  userToUserFormDTO(user: User): UserFormDTO{
    return new UserFormDTO(
      user.name,
      user.lastName,
      user.cpf,
      user.phone,
      user.birthDate,
      user.password
    );
  }

  schedulingToSchedulingDTO(scheduling: Scheduling): SchedulingDTO {
    return new SchedulingDTO(
      scheduling.id,
      scheduling.typeExam,
      scheduling.nameExam,
      scheduling.user,
      scheduling.doctor,
      scheduling.price,
      scheduling.date
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
      schedulingFormDTO.doctor,
      schedulingFormDTO.price,
      schedulingFormDTO.date
    );
  }
}
