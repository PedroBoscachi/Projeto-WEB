import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

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
    private signinService: SigninService
  ) {}

  retornado: any;

  user = {
    cpf: '123',
    password: 'senha',
  };

  ngOnInit(): void {}

  goToHome() {
    //this.router.navigate(['/agendar-exame']);
    localStorage.setItem('token', this.retornado.token);
  }

  register(): void {
    this.signinService.signin(this.user).subscribe((data) => {
      this.retornado = data;
      this.goToHome();
    });
  }
}
