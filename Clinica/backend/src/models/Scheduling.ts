import { User } from "./User";
import { v4 as gerarId } from "uuid";
import { UserDTO } from "../dtos/UserDTO";

export class Scheduling {
  id: string;
  specialization: string;
  local: string;
  user: User;
  doctor: string;
  price: number;
  date: Date;

  constructor(
    specialization: string,
    local: string,
    user: User,
    doctor: string,
    price: number,
    date: Date,
    id?: string
  ) {
    this.id = id;
    this.specialization = specialization;
    this.local = local;
    this.user = user;
    this.doctor = doctor;
    this.price = price;
    this.date = date;
  }
}
