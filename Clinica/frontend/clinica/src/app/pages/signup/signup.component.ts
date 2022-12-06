import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';

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
    private snackBar: SnackBarService
  ) {}

  ngOnInit(): void {}

  register(): void {
    const birth = new Date(this.signupForm.value.birthDate as string);
    const ano = this.signupForm.value.birthDate!.toString().split(" ");

    const user = new User(
      this.signupForm.value.firstName as string,
      this.signupForm.value.lastName as string,
      this.signupForm.value.cpf as string,
      birth,
      this.signupForm.value.phone as string,
      this.signupForm.value.password as string
    );

    if (!this.isValidCPF(this.signupForm.value.cpf as string))
      return this.snackBar.openSnackBar('Digite um cpf válido', 'OK');

    if (parseInt(ano[3]) > 2004)
      return this.snackBar.openSnackBar('Erro! Você precisa ser maior de idade!', 'OK');

    if (this.signupForm.value.password !== this.signupForm.value.confirmPassword)
      return this.snackBar.openSnackBar('Erro! Senhas diferentes!', 'OK');

    if (this.signupForm.value.password!.length < 8)
      return this.snackBar.openSnackBar('Erro! Insira com pelo menos 8 caracteres!', 'OK');

    localStorage.setItem('nome', this.signupForm.value.firstName!);
    this.signupService.signup(user).subscribe((data) => {
      this.valores = data;
      console.log(this.valores);
      if (birth instanceof Date) {
        console.log('É uma data');
      }
    });
    this.snackBar.openSnackBar('Cadastrado com sucesso!', 'OK');
    this.router.navigate(['/']);
  }

  isValidCPF(cpf: string) {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[\s.-]*/gim, '');
    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      return false;
    }
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }
}
