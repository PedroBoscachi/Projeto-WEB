export class UserDTO {
  name: string;
  lastName: string;
  cpf: string;
  phone: string;
  birthDate: Date;

  constructor(
    name: string,
    lastName: string,
    cpf: string,
    phone: string,
    birthDate: Date,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
    this.phone = phone;
    this.birthDate = birthDate;
  }
}
