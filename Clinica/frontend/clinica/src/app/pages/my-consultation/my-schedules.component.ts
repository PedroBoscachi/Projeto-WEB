import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-schedules',
  templateUrl: './my-schedules.component.html',
  styleUrls: ['./my-schedules.component.css'],
})
export class MySchedulesComponent implements OnInit {
  show = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 5000);
  }
}
