import { User } from "../models/User";
import { UserDTO } from "./UserDTO";

export class SchedulingDTO {
  id: string;
  typeExam: string;
  nameExam: string;
  user: UserDTO;
  doctor: string;
  price: number;
  date: string;

  constructor(
    id: string,
    typeExam: string,
    nameExam: string,
    user: UserDTO,
    doctor: string,
    price: number,
    date: string
  ) {
    this.id = id;
    this.typeExam = typeExam;
    this.nameExam = nameExam;
    this.user = user;
    this.doctor = doctor;
    this.price = price;
    this.date = date;
  }
}
