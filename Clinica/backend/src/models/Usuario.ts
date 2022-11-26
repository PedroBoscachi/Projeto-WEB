import { v4 } from "uuid";

export class Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: string;

  constructor(nome: string, sobrenome: string, cpf: string, telefone: string) {
    this.id = v4();
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.telefone = telefone;
  }
}
