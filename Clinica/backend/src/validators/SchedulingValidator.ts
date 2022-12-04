import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";
import { SchedulingRepository } from "../repositories/agendamentoRepository";

export class SchedulingValidator {
  constructor(private schedulingRepository: SchedulingRepository) {}

  validateForm(schedulingFormDTO: SchedulingFormDTO): boolean {
    if (
      schedulingFormDTO.specialization != null &&
      schedulingFormDTO.local != null &&
      schedulingFormDTO.user != null &&
      schedulingFormDTO.doctor != null &&
      schedulingFormDTO.date != null
    ) {
      if (
        schedulingFormDTO.specialization.trim().charAt(0) != "" &&
        schedulingFormDTO.local.trim().charAt(0) != "" &&
        schedulingFormDTO.doctor.trim().charAt(0) != ""
      ) {
        let existingDoctorScheduling = false;
        this.schedulingRepository
          .getSchedulings()
          .forEach((schedulingFound) => {
            if (
              schedulingFound.date == schedulingFormDTO.date &&
              schedulingFound.doctor == schedulingFormDTO.doctor
            ) {
              existingDoctorScheduling = true;
            }
          });
        if (existingDoctorScheduling == false) {
          return true;
        } else {
          throw new Error("Este médico não está disponível nesse horário!");
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
