export class User {
  name: string;
  lastName: string;
  cpf: string;
  birthDate: Date;
  phone: string;
  password: string;

  constructor(
    name: string,
    lastName: string,
    cpf: string,
    birthDate: Date,
    phone: string,
    password: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
    this.birthDate = birthDate;
    this.phone = phone;
    this.password = password;
  }
}
