import { Scheduling } from "../models/Scheduling";

const listSchedulings: Scheduling[] = [];

export class SchedulingRepository {
  saveScheduling(scheduling: Scheduling): Scheduling {
    scheduling.id = (listSchedulings.length + 1).toString();
    listSchedulings.push(scheduling);
    return scheduling;
  }

  getSchedulings(): Scheduling[] {
    return listSchedulings;
  }

  getSchedulingById(id: string): Scheduling {
    return listSchedulings.find((scheduling) => scheduling.id === id);
  }

  updateScheduling(scheduling: Scheduling): Scheduling {
    listSchedulings.forEach((existingScheduling) => {
      if (existingScheduling.id === scheduling.id) {
        existingScheduling.date = scheduling.date;
        existingScheduling.doctor = scheduling.doctor;
        existingScheduling.user = scheduling.user;
        existingScheduling.local = scheduling.local;
        existingScheduling.price = scheduling.price;
        existingScheduling.specialization = scheduling.specialization;
        return existingScheduling;
      }
    });
    return null;
  }

  deleteScheduling(id: string): boolean {
    listSchedulings.forEach((scheduling, index) => {
      if (scheduling.id === id) {
        listSchedulings.splice(index, 1);
        return true;
      }
    });
    return false;
  }
}
