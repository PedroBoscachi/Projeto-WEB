import { User } from "../models/User";

export class SchedulingFormDTO {
  id: string;
  typeExam: string;
  nameExame: string;
  user: string;
  doctor: string;
  price: number;
  date: string;

  constructor(
    id: string,
    typeExam: string,
    nameExame: string,
    user: string,
    doctor: string,
    price: number,
    date: string
  ) {
    this.id = id;
    this.typeExam = typeExam;
    this.nameExame = nameExame;
    this.user = user;
    this.doctor = doctor;
    this.price = price;
    this.date = date;
  }
}
