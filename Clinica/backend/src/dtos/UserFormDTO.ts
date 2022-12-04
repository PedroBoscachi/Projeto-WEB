export class UserFormDTO {
  name: string;
  lastName: string;
  cpf: string;
  phone: string;
  birthDate: Date;
  password: string;

  constructor(
    name: string,
    lastName: string,
    cpf: string,
    phone: string,
    birthDate: Date,
    password: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.cpf = cpf;
    this.phone = phone;
    this.birthDate = birthDate;
    this.password = password;
  }
}
