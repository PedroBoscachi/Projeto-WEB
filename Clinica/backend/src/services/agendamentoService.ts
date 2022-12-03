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
    if(this.validator.validateForm(schedulingFormDTO)){
    let foundUser = this.userRepository.getUserByCpf(schedulingFormDTO.user);
    let scheduling = this.dtoMapper.schedulingFormDTOToScheduling(
      schedulingFormDTO,
      foundUser
    );
    return this.schedulingRepository.saveScheduling(scheduling);
    }else{
      throw new Error("Agendamento Inválido!")
    }
  }

  getSchedulings(): SchedulingDTO[] {
    let schedulingDTOs = this.schedulingRepository
      .getSchedulings()
      .map((scheduling) =>
        this.dtoMapper.schedulingToSchedulingDTO(scheduling)
      );
    return schedulingDTOs;
  }

  getSchedulingbyId(id: string): SchedulingDTO {
    let scheduling = this.schedulingRepository.getSchedulingById(id);
    return this.dtoMapper.schedulingToSchedulingDTO(scheduling);
  }

  updateScheduling(schedulingFormDTO: SchedulingFormDTO): SchedulingDTO {
    if(this.validator.validateForm(schedulingFormDTO)){
    let foundUser = this.userRepository.getUserByCpf(schedulingFormDTO.user);

    let scheduling = this.dtoMapper.schedulingFormDTOToScheduling(
      schedulingFormDTO,
      foundUser
    );
    let updatedScheduling =
      this.schedulingRepository.updateScheduling(scheduling);
    return this.dtoMapper.schedulingToSchedulingDTO(updatedScheduling);
    }else{
      throw new Error("Agendamento Inválido!")
    }
  }

  deleteScheduling(id: string): boolean {
    return this.schedulingRepository.deleteScheduling(id);
  }
}
