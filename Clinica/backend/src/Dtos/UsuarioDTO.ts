export class UsuarioDTO {
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
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.dataNascimento = dataNascimento;
  }
}
