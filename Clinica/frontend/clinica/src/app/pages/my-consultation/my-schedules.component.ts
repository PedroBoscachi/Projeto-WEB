import { Component, OnInit } from '@angular/core';
import { Scheduling } from 'src/app/models/scheduling';
import { DialogSchedulingService } from 'src/app/services/dialog-scheduling.service';
import { MySchedulingsService } from 'src/app/services/my-schedulings.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-schedules',
  templateUrl: './my-schedules.component.html',
  styleUrls: ['./my-schedules.component.css'],
})
export class MySchedulesComponent implements OnInit {
  show = false;
  constructor(
    private myScheduling: MySchedulingsService,
    private myDialogScheduling: DialogSchedulingService
  , private router : Router) {}

  ngOnInit(): void {
    this.getSchedulings();
  }

  token = localStorage.getItem('token');
  cpf = localStorage.getItem('cpf');

  dados: Scheduling[] = [];
  temp: any[] = [];

  getSchedulings() {
    this.myScheduling.getSchedulings(this.token!, this.cpf!).subscribe(
      (data) => {
        this.temp = data.schedulings;
        this.temp.forEach((element) => {
          this.dados.push(element);
        });
        if (this.dados.length === 0) {
          this.show = true
        }
        console.log(data);
        console.log(this.dados);
        console.log('Deu Certo');
      },
      (erro) => {
        console.log('Deu erro');
      }
    );
  }

  editScheduling() {
    this.myDialogScheduling.openForm();
  }

  recarregar(){
    window.location.reload();
  }

  deleteScheduling(id : string){
    this.myScheduling.deleteScheduling(id, this.token!).subscribe(
      (data) =>{
        console.log(data);
        this.recarregar();
        this.router.navigate(['/home/meus-agendamentos']);
      }
    )
  }
}
