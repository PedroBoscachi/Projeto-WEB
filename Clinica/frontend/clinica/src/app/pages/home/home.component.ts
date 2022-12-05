import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogMyProfileService } from 'src/app/dialogs/services/dialog-my-profile.service';
import { MyProfileService } from 'src/app/services/my-profile.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nome: any = ''

  constructor(
    private router: Router,
    private snackBar: SnackBarService,
    private myProfile: MyProfileService,
    private dialog: DialogMyProfileService
    ) { }

  ngOnInit(): void {
    this.myProfile.returnUser().subscribe(
      (response) => {
        this.nome = response.user.name;
      },
      (error) => {
        this.nome = 'paciente'
        console.log("Erro em recuperar o nome")
      }
    );
  }

    openFormMyProfile() {
    this.dialog.openForm().then(()=>{
      console.log('chegou')
    });
  }
}
