import { SchedulingFormDTO } from "../dtos/SchedulingFormDTO";

export class SchedulingValidator{
    validateForm(schedulingFormDTO: SchedulingFormDTO): boolean{
        if(
            (schedulingFormDTO.typeExam != null)&&
            (schedulingFormDTO.nameExame != null)&&
            (schedulingFormDTO.user != null)&&
            (schedulingFormDTO.doctor != null)&&
            (!isNaN(schedulingFormDTO.price))&&
            (schedulingFormDTO.date != null)
        ){
            if(
                (schedulingFormDTO.typeExam.trim().charAt(0)!=='')&&
                (schedulingFormDTO.nameExame.trim().charAt(0)!=='')&&
                (schedulingFormDTO.doctor.trim().charAt(0)!=='')&&
                (schedulingFormDTO.date.trim().charAt(0)!=='')
            ){
                return true
            }else{
                return false
            }
        }else{
            return false
        }
    }
}