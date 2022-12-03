import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";

export class SchedulingValidator {
  validateForm(schedulingFormDTO: SchedulingFormDTO): boolean {
    if (
      schedulingFormDTO.typeExam != null &&
      schedulingFormDTO.nameExam != null &&
      schedulingFormDTO.user != null &&
      schedulingFormDTO.doctor != null &&
      schedulingFormDTO.date != null
    ) {
      console.log("hello");
      if (
        schedulingFormDTO.typeExam.trim().charAt(0) != "" &&
        schedulingFormDTO.nameExam.trim().charAt(0) != "" &&
        schedulingFormDTO.doctor.trim().charAt(0) != "" &&
        schedulingFormDTO.date.trim().charAt(0) != ""
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
