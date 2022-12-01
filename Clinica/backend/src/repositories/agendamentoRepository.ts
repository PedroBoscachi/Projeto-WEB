import { Agendamento } from "../models/Agendamento";

const listSchedulings: Agendamento[] = [];

export class AgendamentoRepository {
  saveScheduling(scheduling: Agendamento): Agendamento {
    listSchedulings.push(scheduling);
    return scheduling;
  }

  getSchedulings(): Agendamento[] {
    return listSchedulings;
  }

  getSchedulingById(id: string): Agendamento {
    return listSchedulings.find((scheduling) => scheduling.id === id);
  }

  updateScheduling(scheduling: Agendamento): Agendamento {
    listSchedulings.forEach((existingScheduling) => {
      if (existingScheduling.id === scheduling.id) {
        existingScheduling.data = scheduling.data;
        existingScheduling.medico = scheduling.medico;
        existingScheduling.usuario = scheduling.usuario;
        existingScheduling.nomeExame = scheduling.nomeExame;
        existingScheduling.preco = scheduling.preco;
        existingScheduling.tipoExame = scheduling.tipoExame;
        return existingScheduling;
      }
    });
    return null;
  }

  deleteScheduling(id: string): boolean {
    listSchedulings.forEach((scheduling, index) => {
      if (scheduling.id === id) {
        listSchedulings.splice(index, 1);
        return true;
      }
    });
    return false;
  }
}
