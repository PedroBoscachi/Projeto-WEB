import { User } from "./User";
import { v4 as gerarId } from "uuid";

export class Scheduling {
  id: string;
  typeExam: string;
  nameExam: string;
  user: User;
  doctor: string;
  price: number;
  date: string;

  constructor(
    typeExam: string,
    nameExam: string,
    user: User,
    doctor: string,
    price: number,
    date: string
  ) {
    this.id = gerarId();
    this.typeExam = typeExam;
    this.nameExam = nameExam;
    this.user = user;
    this.doctor = doctor;
    this.price = price;
    this.date = date;
  }
}
