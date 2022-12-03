import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {

  hide = true;

  loginForm = this.fb.group({
    cpf : [''],
    password : ['']
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {}

  goToHome() {
    //this.router.navigate(['/agendar-exame']);
    localStorage.setItem('usuario', JSON.stringify(this.loginForm.value));
  }
}