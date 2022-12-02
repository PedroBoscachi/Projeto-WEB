import { Usuario } from "../models/Usuario";
export class AgendamentoFormDTO {
  id: string | undefined;
  tipoExame: string;
  nomeExame: string;
  usuario: string;
  medico: string;
  preco: number;
  data: string;

  constructor(
    tipoExame: string,
    nomeExame: string,
    usuario: string,
    medico: string,
    preco: number,
    data: string,
    id?: string,
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
/* "id": "1",
"tipoExame": "exame",
"nomeExame": "a",
"usuario": "123456",
"medico": "sergio",
"preco": "12",
"data": "12" */