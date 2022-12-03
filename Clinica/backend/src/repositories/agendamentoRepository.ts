import { Scheduling } from "../models/Scheduling";

const listSchedulings: Scheduling[] = [];

export class SchedulingRepository {
  saveScheduling(scheduling: Scheduling): Scheduling {
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
        existingScheduling.nameExam = scheduling.nameExam;
        existingScheduling.price = scheduling.price;
        existingScheduling.typeExam = scheduling.typeExam;
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
