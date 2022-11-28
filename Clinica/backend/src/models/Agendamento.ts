import { v4 as gerarId } from "uuid";

export class Agendamento {
  id: string;
  tipoExame: string;
  dia: Date;
  hora: Date;

  constructor(tipoExame: string, dia: Date, hora: Date) {
    this.id = gerarId();
    this.tipoExame = tipoExame;
    this.dia = dia;
    this.hora = hora;
  }
}
