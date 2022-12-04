import { DialogMyProfileComponent } from './../pages/dialog-my-profile/dialog-my-profile.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogMyProfileService {

constructor(
  private dialog: MatDialog
) { }

openForm(message?: string, params?: any) {
  return this.dialog
    .open(DialogMyProfileComponent, {
      data: { message, params },
      disableClose: true,
      panelClass: 'my-custom-dialog-class',
      closeOnNavigation: false,
      width: '335px',
    })
    .afterClosed();
}
}
