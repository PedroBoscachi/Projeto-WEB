import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-exam',
  templateUrl: './schedule-exam.component.html',
  styleUrls: ['./schedule-exam.component.css'],
})
export class ScheduleExamComponent implements OnInit {
  items: string[] = ['Lucas', 'Maria', 'Isabela'];
  constructor() {}

  ngOnInit(): void {}

  push(name: string): void {
    this.items.push(name);
  }
}
