import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true;

  valores: any;

  constructor(private signupService: SignupService) {}

  ngOnInit(): void {
    console.log('entrou aqui');
    this.register();
  }

  register(): void {
    console.log('cadastro');
    const user = {
      name: 'Alisson',
      lastName: 'Kauan',
      cpf: '123',
      password: 'senha',
      phone: '123',
      birthDate: '20/20/2000',
    };
    this.signupService.signup(user).subscribe((data) => {
      this.valores = data;
    });
  }
}
