import { v4 as gerarId } from "uuid";

export class Usuario {
  id: string;
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: string;

  constructor(nome: string, sobrenome: string, cpf: string, telefone: string) {
    this.id = gerarId();
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.telefone = telefone;
  }
}
