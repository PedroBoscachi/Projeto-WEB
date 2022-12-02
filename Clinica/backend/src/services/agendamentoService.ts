import { UsuarioRepository } from './../repositories/usuarioRepository';
import { AgendamentoFormDTO } from './../Dtos/AgendamentoFormDTO';
import { DTOMapper } from "../helpers/DTOMapper";
import { AgendamentoRepository } from "../repositories/agendamentoRepository";
import { AgendamentoDTO } from "../Dtos/AgendamentoDTO";

export class AgendamentoService {
  constructor(
    private agendamentoRepository: AgendamentoRepository,
    private userRepository: UsuarioRepository,
    private dtoMapper: DTOMapper
  ) {}

  saveScheduling(schedulingFormDTO: AgendamentoFormDTO): AgendamentoDTO {
    let foundUser = this.userRepository.getUserByCpf(schedulingFormDTO.usuario)
    let scheduling = this.dtoMapper.agendamentoFormDTOToAgendamento(schedulingFormDTO, foundUser);
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

  updateScheduling(schedulingFormDTO: AgendamentoFormDTO): AgendamentoDTO {
    let foundUser = this.userRepository.getUserByCpf(schedulingFormDTO.usuario)
    let scheduling = this.dtoMapper.agendamentoFormDTOToAgendamento(schedulingFormDTO, foundUser);
    
    let updatedScheduling =
      this.agendamentoRepository.updateScheduling(scheduling);
    if(updatedScheduling==null){
      return null;
    }
    return this.dtoMapper.agendamentoToAgendamentoDTO(updatedScheduling);
  }

  deleteScheduling(id: string): boolean {
    return this.agendamentoRepository.deleteScheduling(id);
  }
}
