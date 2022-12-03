import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true;

  signupForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    cpf: [''],
    phone: [''],
    birthDate: [''],
    password: [''],
  });

  valores: any;

  constructor(private signupService: SignupService, private fb: FormBuilder) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  nome = this.signupForm.value.firstName;

  register(): void {
    const birth = new Date(this.signupForm.value.birthDate as string);

    const user = new User(
      this.signupForm.value.firstName as string,
      this.signupForm.value.lastName as string,
      this.signupForm.value.cpf as string,
      birth,
      this.signupForm.value.phone as string,
      this.signupForm.value.password as string
    );

    this.signupService.signup(user).subscribe((data) => {
      this.valores = data;
      console.log(this.valores)
      if(birth instanceof Date){
        console.log("É uma data")
      }
    });
  }
}
