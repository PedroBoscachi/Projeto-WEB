import { UserRepository } from "./../repositories/usuarioRepository";
import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";
import { DTOMapper } from "../helpers/DTOMapper";
import { SchedulingRepository } from "../repositories/agendamentoRepository";
import { SchedulingDTO } from "../dtos/SchedulingDTO";

export class SchedulingService {
  constructor(
    private schedulingRepository: SchedulingRepository,
    private userRepository: UserRepository,
    private dtoMapper: DTOMapper
  ) {}

  saveScheduling(schedulingFormDTO: SchedulingFormDTO): SchedulingDTO {
    let foundUser = this.userRepository.getUserByCpf(schedulingFormDTO.user);
    let scheduling = this.dtoMapper.schedulingFormDTOToScheduling(
      schedulingFormDTO,
      foundUser
    );
    return this.schedulingRepository.saveScheduling(scheduling);
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
    let foundUser = this.userRepository.getUserByCpf(schedulingFormDTO.user);

    let scheduling = this.dtoMapper.schedulingFormDTOToScheduling(
      schedulingFormDTO,
      foundUser
    );
    let updatedScheduling =
      this.schedulingRepository.updateScheduling(scheduling);
    return this.dtoMapper.schedulingToSchedulingDTO(updatedScheduling);
  }

  deleteScheduling(id: string): boolean {
    return this.schedulingRepository.deleteScheduling(id);
  }
}
