import { UserDTO } from "../dtos/UserDTO";
import { UserFormDTO } from "../dtos/UserFormDTO";
import { User } from "../models/User";

export class UsersValidator{
    validateEntity(user: User): boolean{
        if(
            (user.birthDate != null) &&
            (user.cpf != null ) &&
            (user.lastName != null) &&
            (user.name != null) &&
            (user.password != null) &&
            (user.phone != null)
            )
            {
                if(
                    (user.cpf.trim().charAt(0)!=='')&&
                    (user.name.trim().charAt(0)!=='')&&
                    (user.lastName.trim().charAt(0)!=='')&&
                    (user.password.trim().charAt(0)!=='')&&
                    (user.phone.trim().charAt(0)!=='')
                    ){
                        return true
                    }else{
                        return false
                    }
            }
        return false
    }

    validateDTO(user: UserDTO): boolean{
        if(
            (user.birthDate != null) &&
            (user.cpf != null ) &&
            (user.lastName != null) &&
            (user.name != null) &&
            (user.phone != null)
            )
            {
                if(
                    (user.cpf.trim().charAt(0)!=='')&&
                    (user.name.trim().charAt(0)!=='')&&
                    (user.lastName.trim().charAt(0)!=='')&&
                    (user.phone.trim().charAt(0)!=='')
                    ){
                        return true
                    }else{
                        return false
                    }
            }
        return false
    }

    validateForm(user: UserFormDTO): boolean{
        if(
            (user.birthDate != null) &&
            (user.cpf != null ) &&
            (user.lastName != null) &&
            (user.name != null) &&
            (user.password != null) &&
            (user.phone != null)
            )
            {
                if(
                    (user.cpf.trim().charAt(0)!=='')&&
                    (user.name.trim().charAt(0)!=='')&&
                    (user.lastName.trim().charAt(0)!=='')&&
                    (user.password.trim().charAt(0)!=='')&&
                    (user.phone.trim().charAt(0)!=='')
                    ){
                        return true
                    }else{
                        return false
                    }
            }
        return false
    }
    
}