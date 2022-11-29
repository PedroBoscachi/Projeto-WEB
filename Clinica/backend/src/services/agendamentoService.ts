import { DTOMapper } from "../helpers/DTOMapper";
import { AgendamentoRepository } from "../repositories/agendamentoRepository";
import { AgendamentoDTO } from "../dtos/AgendamentoDTO";

export class AgendamentoService {
  constructor(
    private agendamentoRepository: AgendamentoRepository,
    private dtoMapper: DTOMapper
  ) {}

  saveScheduling(schedulingDTO: AgendamentoDTO): AgendamentoDTO {
    let scheduling = this.dtoMapper.agendamentoDTOToAgendamento(schedulingDTO);
    return this.agendamentoRepository.saveScheduling(scheduling);
  }

  getSchedulings(): AgendamentoDTO[] {
    let schedulingDTOs = this.agendamentoRepository
      .getSchedulings()
      .map((scheduling) =>
        this.dtoMapper.agendamentoToAgendamentoDTO(scheduling)
      );
    return schedulingDTOs;
  }

  getSchedulingbyId(id: string): AgendamentoDTO {
    let scheduling = this.agendamentoRepository.getSchedulingById(id);
    return this.dtoMapper.agendamentoToAgendamentoDTO(scheduling);
  }

  updateScheduling(schedulingDTO: AgendamentoDTO): AgendamentoDTO {
    let scheduling = this.dtoMapper.agendamentoDTOToAgendamento(schedulingDTO);
    let updatedScheduling =
      this.agendamentoRepository.updateScheduling(scheduling);
    return this.dtoMapper.agendamentoToAgendamentoDTO(updatedScheduling);
  }

  deleteScheduling(id: string): boolean {
    return this.agendamentoRepository.deleteScheduling(id);
  }
}
