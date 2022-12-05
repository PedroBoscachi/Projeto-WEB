import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogMyProfileComponent } from '../dialog-my-profile/dialog-my-profile.component';

@Injectable({
  providedIn: 'root',
})
export class DialogMyProfileService {
  constructor(private dialog: MatDialog) {}

  openForm(message?: string, params?: any) {
    return this.dialog
      .open(DialogMyProfileComponent, {
        data: { message, params },
        disableClose: true,
        panelClass: 'generic-dialog',
        closeOnNavigation: false,
        width: '335px',
      })
      .afterClosed()
      .toPromise();
  }
}
