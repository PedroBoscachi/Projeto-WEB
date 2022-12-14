import { DialogDeleteSchedulingService } from '../../dialogs/services/dialog-delete-scheduling.service';
import { DialogDeleteScheduleComponent } from '../../dialogs/dialog-delete-schedule/dialog-delete-schedule.component';
import { Component, OnInit } from '@angular/core';
import { Scheduling } from 'src/app/models/scheduling';
import { MySchedulingsService } from 'src/app/services/my-schedulings.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { DialogSchedulingService } from 'src/app/dialogs/services/dialog-scheduling.service';

@Component({
  selector: 'app-my-schedules',
  templateUrl: './my-schedules.component.html',
  styleUrls: ['./my-schedules.component.css'],
})
export class MySchedulesComponent implements OnInit {
  show = false;
  isFetchingConsults = false;
  constructor(
    private myScheduling: MySchedulingsService,
    private myDialogScheduling: DialogSchedulingService,
    private router: Router,
    private snackBar: SnackBarService,
    private deleteDialog: DialogDeleteSchedulingService
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('specialization');
    localStorage.removeItem('local');
    localStorage.removeItem('doctor');
    localStorage.removeItem('id');
    localStorage.removeItem('dateTime');
    this.getSchedulings();
  }

  token = localStorage.getItem('token');
  cpf = localStorage.getItem('cpf');

  dados: Scheduling[] = [];
  temp: any[] = [];

  getSchedulings() {
    this.isFetchingConsults = true;
    this.myScheduling.getSchedulings(this.token!, this.cpf!).subscribe(
      (data) => {
        this.temp = data.schedulings;
        this.temp.forEach((element) => {
          this.dados.push(element);
        });
        this.isFetchingConsults = false;
        if (!this.dados.length) this.show = true;
      },
      (erro) => {
        this.isFetchingConsults = false;
        console.log('Deu erro');
      }
    );
  }

  editScheduling(
    specialization: string,
    local: string,
    doctor: string,
    dateTime: Date,
    id: string
  ) {
    localStorage.setItem('specialization', specialization);
    localStorage.setItem('local', local);
    localStorage.setItem('doctor', doctor);
    localStorage.setItem('id', id);
    localStorage.setItem('dateTime', dateTime.toString());
    this.myDialogScheduling.openForm().then(() => {
      this.dados.length = 0;
      this.getSchedulings();
    });
  }

  deleteScheduling(id: string) {
    /* this.myScheduling.deleteScheduling(id).subscribe((data) => {
      this.dados = this.dados.filter((consult) => consult.id !== id);
      this.snackBar.openSnackBar('Consulta cancelada com sucesso!', 'Ok');
      if (!this.dados.length) this.show = true;
    }); */
    console.log(id);
    this.deleteDialog.openForm('', id).then(() => {
      this.dados.length = 0;
      this.getSchedulings();
    });
  }

  formatDate = (date: string) => {
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    const year = date.slice(0, 4);

    return `${day}/${month}/${year}`;
  };

  formatHour = (hour: string) => {
    const hours = +hour.slice(0, 2);
    const minutes = hour.slice(3, 5);
    return `${hours - 3}:${minutes}`;
  };
}
