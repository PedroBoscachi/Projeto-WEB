export class UserUpdateDTO {
  name: string;
  lastName: string;
  phone: string;
  birthDate: Date;

  constructor(name: string, lastName: string, phone: string, birthDate: Date) {
    this.name = name;
    this.lastName = lastName;
    this.phone = phone;
    this.birthDate = birthDate;
  }
}
