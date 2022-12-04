import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyProfileService } from 'src/app/services/my-profile.service';

@Component({
  selector: 'app-dialog-my-profile',
  templateUrl: './dialog-my-profile.component.html',
  styleUrls: ['./dialog-my-profile.component.css'],
})
export class DialogMyProfileComponent implements OnInit {
  message: any;
  param: any;
  title: string;
  hidePassword = true;
  hideConfirmPassword: boolean = true;
  disable: string = 'true';
  disableClass: string = 'disableClass';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; title: string; params: any },
    private myProfile: MyProfileService
  ) {
    this.message = data.message;
    this.param = data.params;
    this.title = data.title;
  }

  ngOnInit(): void {
    this.myProfile.returnUser().subscribe(user =>{
      console.log(user.user)
    })
  }

  toogleEdit() {
    if (this.disable == 'true') {
      this.disable = 'false';
    } else {
      this.disable = 'true';
    }
  }
}
