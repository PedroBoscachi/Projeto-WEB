import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSchedulingComponent } from '../dialog-scheduling/dialog-scheduling.component';

@Injectable({
  providedIn: 'root',
})
export class DialogSchedulingService {
  constructor(private dialog: MatDialog) {}

  openForm(message?: string) {
    return this.dialog
      .open(DialogSchedulingComponent, {
        data: { message },
        disableClose: true,
        panelClass: 'generic-dialog',
        closeOnNavigation: false,
        width: '335px',
      })
      .afterClosed()
      .toPromise();
  }
}
