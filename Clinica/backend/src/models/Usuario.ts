import { v4 as gerarId } from "uuid";

export class Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: string;
  dataNascimento: Date;

  constructor(
    nome: string,
    sobrenome: string,
    cpf: string,
    telefone: string,
    dataNascimento: Date
  ) {
    this.id = gerarId();
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.dataNascimento = dataNascimento;
  }
}
