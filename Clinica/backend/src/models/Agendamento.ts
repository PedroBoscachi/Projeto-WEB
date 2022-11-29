import { Usuario } from "./Usuario";
import { v4 as gerarId } from "uuid";

export class Agendamento {
  id: string;
  tipoExame: string;
  nomeExame: string;
  usuario: Usuario;
  medico: string;
  preco: number;
  data: string;

  constructor(
    tipoExame: string,
    nomeExame: string,
    usuario: Usuario,
    medico: string,
    preco: number,
    data: string
  ) {
    this.id = gerarId();
    this.tipoExame = tipoExame;
    this.nomeExame = nomeExame;
    this.usuario = usuario;
    this.medico = medico;
    this.preco = preco;
    this.data = data;
  }
}
