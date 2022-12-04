import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/dtos/loginDto';
import { SigninService } from 'src/app/services/signin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  hide = true;

  loginForm = this.fb.group({
    cpf: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signinService: SigninService,
    private snackBar: MatSnackBar
  ) {}

  retornado: any;

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['/agendar-exame']);
    localStorage.setItem('token', this.retornado.token);
  }

  register(): void {
    const login = new LoginDto(
      this.loginForm.value.cpf as string,
      this.loginForm.value.password as string
    );

    console.log(typeof login.cpf);
    console.log(typeof login.password);

    this.signinService.signin(login).subscribe(
      (data) => {
        this.retornado = data;
        this.goToHome();
        console.log(this.retornado);
      },
      (error) => {
        this.openSnackBar('Falha na autenticação');
      }
    );
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
      panelClass: ['snackBar'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
