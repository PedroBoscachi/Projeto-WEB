import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
 
  hidePassword = true;
  hideConfirmPassword : boolean = true;
  disable : string = "true";
  disableClass : string = "disableClass";

  constructor() { }

  ngOnInit(): void {
  }

  toogleEdit(){
    if(this.disable == "true"){
      this.disable = "false";
    }else{
      this.disable = "true"
    }
  }

}
