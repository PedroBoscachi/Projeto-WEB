import { DialogDeleteScheduleComponent } from '../dialog-delete-schedule/dialog-delete-schedule.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogDeleteSchedulingService {
  constructor(private dialog: MatDialog) {}

  openForm(message?: string, params?: any) {
    return this.dialog
      .open(DialogDeleteScheduleComponent, {
        data: { message, params },
        disableClose: true,
        panelClass: 'delete-schedule-dialog',
        closeOnNavigation: false,
        width: '360px',
      })
      .afterClosed()
      .toPromise();
  }
}
