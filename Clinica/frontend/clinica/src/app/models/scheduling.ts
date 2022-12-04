import { User } from "./user";

export class Scheduling {
  id: string;
  specialization: string;
  local: string;
  user: User;
  doctor: string;
  price: number;
  date: Date;

  constructor(
    id: string,
    specialization: string,
    local: string,
    user: User,
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
