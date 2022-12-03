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

 /*  userDTOToUser(userDTO: UserDTO): User {
    return new User(
      userDTO.name,
      userDTO.lastName,
      userDTO.cpf,
      userDTO.phone,
      userDTO.birthDate
    );
  } */

  userToUserFormDTO(user: User): UserFormDTO {
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
    let userDto = this.userToUserDTO(scheduling.user);
    return new SchedulingDTO(
      scheduling.id,
      scheduling.specialization,
      scheduling.local,
      userDto,
      scheduling.doctor,
      scheduling.price,
      scheduling.date
    );
  }

  /* schedulingDTOToScheduling(schedulingDTO: SchedulingDTO): Scheduling {
    let userEntity = this.userFormDTOToUser(schedulingDTO.user)
    return new Scheduling(
      schedulingDTO.specialization,
      schedulingDTO.local,
      schedulingDTO.user,
      schedulingDTO.doctor,
      schedulingDTO.price,
      schedulingDTO.date
    );
  } */

  schedulingFormDTOToScheduling(
    schedulingFormDTO: SchedulingFormDTO,
    foundUser: UserFormDTO
  ): Scheduling {
    let foundUserEntity = this.userFormDTOToUser(foundUser);
    return new Scheduling(
      schedulingFormDTO.specialization,
      schedulingFormDTO.local,
      foundUserEntity,
      schedulingFormDTO.doctor,
      schedulingFormDTO.price,
      schedulingFormDTO.date
    );
  }
}
