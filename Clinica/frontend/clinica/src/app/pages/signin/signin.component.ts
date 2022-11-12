import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  hide = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome() {
    this.router.navigate(['/agendar-exame']);
  }
}
