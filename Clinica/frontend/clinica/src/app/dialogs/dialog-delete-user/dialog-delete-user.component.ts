import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyProfileService } from 'src/app/services/my-profile.service';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.css'],
})
export class DialogDeleteUserComponent implements OnInit {
  constructor(
    private myProfileService: MyProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteUser(): void {
    this.myProfileService.deleteUser().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
