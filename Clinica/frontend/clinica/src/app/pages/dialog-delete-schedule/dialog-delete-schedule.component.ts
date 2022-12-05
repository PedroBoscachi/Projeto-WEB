import { SnackBarService } from './../../services/snack-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MySchedulingsService } from 'src/app/services/my-schedulings.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-delete-schedule',
  templateUrl: './dialog-delete-schedule.component.html',
  styleUrls: ['./dialog-delete-schedule.component.css']
})
export class DialogDeleteScheduleComponent implements OnInit {

  id

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private myScheduling: MySchedulingsService,
  private snackBar: SnackBarService){
    this.id = this.data
  }

  ngOnInit(): void {
  }

  deleteSchedule(){
    console.log(this.id.params)
    this.myScheduling.deleteScheduling(this.id.params).subscribe((data) => {
      this.snackBar.openSnackBar('Consulta cancelada com sucesso!', 'Ok');
    });
  }

}
