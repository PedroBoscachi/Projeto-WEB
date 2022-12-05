import { DialogDeleteScheduleComponent } from './../pages/dialog-delete-schedule/dialog-delete-schedule.component';
import { DialogDeleteUserComponent } from './../pages/dialog-delete-user/dialog-delete-user.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogDeleteSchedulingService {

  constructor(private dialog: MatDialog) {}

  openForm(message?: string, params?: any) {
    return this.dialog
      .open(DialogDeleteScheduleComponent, {
        data: { message, params },
        disableClose: true,
        panelClass: 'my-custom-dialog-class',
        closeOnNavigation: false,
        width: '360px',
      })
      .afterClosed()
      .toPromise();
  }
}
