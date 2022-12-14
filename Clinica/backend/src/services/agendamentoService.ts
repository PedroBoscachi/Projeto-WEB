import { UserRepository } from "./../repositories/usuarioRepository";
import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";
import { DTOMapper } from "../helpers/DTOMapper";
import { SchedulingRepository } from "../repositories/agendamentoRepository";
import { SchedulingDTO } from "../dtos/SchedulingDTO";
import { SchedulingValidator } from "../validators/SchedulingValidator";

export class SchedulingService {
  constructor(
    private schedulingRepository: SchedulingRepository,
    private userRepository: UserRepository,
    private dtoMapper: DTOMapper,
    private validator: SchedulingValidator
  ) {}

  saveScheduling(schedulingFormDTO: SchedulingFormDTO): SchedulingDTO {
    console.log(schedulingFormDTO);
    console.log("bateu");
    if (this.validator.validateForm(schedulingFormDTO)) {
      let foundUser = this.userRepository.getUserByCpf(schedulingFormDTO.user);
      const userDto = this.dtoMapper.userToUserFormDTO(foundUser);
      let scheduling = this.dtoMapper.schedulingFormDTOToScheduling(
        schedulingFormDTO,
        userDto
      );
      return this.dtoMapper.schedulingToSchedulingDTO(
        this.schedulingRepository.saveScheduling(scheduling)
      );
    } else {
      throw new Error("Agendamento Inválido!");
    }
  }

  getSchedulings(cpf: string): SchedulingDTO[] {
    let foundUser = this.userRepository.getUserByCpf(cpf);
    if (foundUser != null) {
      let schedulingDTOs: SchedulingDTO[] = [];
      this.schedulingRepository.getSchedulings().forEach((scheduling) => {
        if (scheduling.user.cpf == cpf) {
          let teste = this.dtoMapper.schedulingToSchedulingDTO(scheduling);
          schedulingDTOs.push(teste);
        }
      });
      return schedulingDTOs;
    }
  }

  getSchedulingbyId(id: string): SchedulingDTO {
    let scheduling = this.schedulingRepository.getSchedulingById(id);
    if (scheduling == null) throw new Error("Agendamento não encontrado");
    return this.dtoMapper.schedulingToSchedulingDTO(scheduling);
  }

  updateScheduling(schedulingFormDTO: SchedulingFormDTO): SchedulingDTO {
    if (this.validator.validateForm(schedulingFormDTO)) {
      let foundUser = this.dtoMapper.userToUserFormDTO(
        this.userRepository.getUserByCpf(schedulingFormDTO.user)
      );
      console.log(foundUser);
      let scheduling = this.dtoMapper.schedulingFormDTOToScheduling(
        schedulingFormDTO,
        foundUser
      );
      console.log(scheduling);
      let updatedScheduling =
        this.schedulingRepository.updateScheduling(scheduling);
      return this.dtoMapper.schedulingToSchedulingDTO(updatedScheduling);
    } else {
      throw new Error("Agendamento Inválido!");
    }
  }

  deleteScheduling(id: string): boolean {
    return this.schedulingRepository.deleteScheduling(id);
  }
}
