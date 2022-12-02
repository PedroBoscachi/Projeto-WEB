import { Usuario } from "../models/Usuario";
export class AgendamentoDTO {
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
    data: string,
    id: string
  ) {
    this.id = id
    this.tipoExame = tipoExame;
    this.nomeExame = nomeExame;
    this.usuario = usuario;
    this.medico = medico;
    this.preco = preco;
    this.data = data;
  }
}
