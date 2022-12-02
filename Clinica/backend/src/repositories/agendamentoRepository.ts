import { Agendamento } from "../models/Agendamento";

const listSchedulings: Agendamento[] = [];

export class AgendamentoRepository {
  saveScheduling(scheduling: Agendamento): Agendamento {
    scheduling.id = (listSchedulings.length+1).toString();
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
    let updatedScheduling
    listSchedulings.forEach((existingScheduling) => {
      if (existingScheduling.id == scheduling.id) {
        existingScheduling.data = scheduling.data;
        existingScheduling.medico = scheduling.medico;
        existingScheduling.usuario = scheduling.usuario;
        existingScheduling.nomeExame = scheduling.nomeExame;
        existingScheduling.preco = scheduling.preco;
        existingScheduling.tipoExame = scheduling.tipoExame;
        updatedScheduling = existingScheduling;
      }
    });
    return updatedScheduling
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
