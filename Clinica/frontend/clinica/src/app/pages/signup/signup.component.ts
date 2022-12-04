import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true;

  signupForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    cpf: ['', Validators.required],
    phone: ['', Validators.required],
    birthDate: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: [''],
  });

  valores: any;

  constructor(
    private router: Router,
    private signupService: SignupService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }

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

    if (
      this.signupForm.value.password !== this.signupForm.value.confirmPassword
    ) {
      this.openSnackBar('Erro! Senhas diferentes!');
    } else {
      this.signupService.signup(user).subscribe((data) => {
        this.valores = data;
        console.log(this.valores);
        if (birth instanceof Date) {
          console.log('É uma data');
        }
      });
      this.openSnackBar('Cadastrado com sucesso!');
      this.router.navigate(['/login']);
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
      panelClass: ['snackBar'],
    });
  }
}
