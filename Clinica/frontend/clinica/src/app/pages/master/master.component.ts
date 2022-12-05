import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogMyProfileService } from 'src/app/dialogs/services/dialog-my-profile.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: DialogMyProfileService
  ) {}

  ngOnInit(): void {
    this.router.navigate(['/home/pagina-inicial']);
  }

  openFormMyProfile() {
    this.dialog.openForm();
  }
}
