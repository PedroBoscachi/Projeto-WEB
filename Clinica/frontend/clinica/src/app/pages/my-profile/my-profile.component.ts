import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  hidePassword = true;
  hideConfirmPassword : boolean = true;
  disable : string = "true";

  profileForm = this.fb.group({
    firstName : [''],
    lastName : [''],
    cpf : [''],
    telephone : [''],
    birth : [''],
    password  : [''],
    confirmPassword : ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    console.log(this.profileForm.value);
  }

  public enableEdit(){
    this.disable = "false";
  }

}
