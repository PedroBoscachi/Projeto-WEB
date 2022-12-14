import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';

@Injectable({
  providedIn: 'root',
})
export class DialogDeleteUserService {
  constructor(private dialog: MatDialog) {}

  openForm(message?: string, params?: any) {
    return this.dialog
      .open(DialogDeleteUserComponent, {
        data: { message, params },
        disableClose: true,
        panelClass: 'generic-dialog',
        closeOnNavigation: false,
        width: '360px',
      })
      .afterClosed();
  }
}
