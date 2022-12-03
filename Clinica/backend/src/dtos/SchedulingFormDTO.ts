import { User } from "../models/User";

export class SchedulingFormDTO {
  id: string;
  specialization: string;
  local: string;
  user: string;
  doctor: string;
  price: number;
  date: Date;

  constructor(
    id: string,
    specialization: string,
    local: string,
    user: string,
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
