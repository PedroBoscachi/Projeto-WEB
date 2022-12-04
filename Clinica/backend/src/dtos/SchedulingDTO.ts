import { User } from "../models/User";
import { UserDTO } from "./UserDTO";

export class SchedulingDTO {
  id: string;
  specialization: string;
  local: string;
  user: UserDTO;
  doctor: string;
  price: number;
  date: Date;

  constructor(
    id: string,
    specialization: string,
    local: string,
    user: UserDTO,
    doctor: string,
    price: number,
    date: Date
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
