import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/dtos/loginDto';
import { SigninService } from 'src/app/services/signin.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  hide = true;

  loginForm = this.fb.group({
    cpf: [''],
    password: [''],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private signinService: SigninService,
    private snackBar: SnackBarService
  ) {}

  retornado: any;

  ngOnInit(): void {
    localStorage.clear();
  }

  goToHome() {
    this.router.navigate(['/home/agendar-exame']);
    localStorage.setItem('token', this.retornado.token);
    localStorage.setItem('cpf', this.loginForm.value.cpf!);
  }

  register(): void {
    const login = new LoginDto(
      this.loginForm.value.cpf as string,
      this.loginForm.value.password as string
    );

    this.signinService.signin(login).subscribe(
      (data) => {
        this.retornado = data;
        this.goToHome();
        console.log(this.retornado);
      },
      (error) => {
        this.snackBar.openSnackBar('Falha na autenticação', 'OK');
      }
    );
  }
}
