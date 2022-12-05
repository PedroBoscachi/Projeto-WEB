import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MyProfileService } from 'src/app/services/my-profile.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { DialogDeleteUserService } from '../services/dialog-delete-user.service';

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
  disable: boolean = true;
  disableClass: string = 'disableClass';
  formDialog: string = 'disable-form';

  myProfileForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    cpf: [''],
    phone: ['', Validators.required],
    birthDate: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: [''],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { message: string; title: string; params: any },
    private myProfile: MyProfileService,
    private formBuilder: FormBuilder,
    private snackBar: SnackBarService,
    private router: Router,
    private dialog: DialogDeleteUserService
  ) {
    this.message = data.message;
    this.param = data.params;
    this.title = data.title;
  }

  ngOnInit(): void {
    this.myProfile.returnUser().subscribe(
      (response) => {
        let aniversario = this.toDate(response.user.birthDate);
        this.myProfileForm.patchValue(response.user);
        this.myProfileForm.patchValue({ birthDate: aniversario });
      },
      (error) => {
        this.snackBar.openSnackBar(
          'Não foi possivel recuperar os dados!',
          'OK'
        );
      }
    );
  }

  toogleEdit() {
    if (this.disable == true) {
      this.formDialog = 'no-disable-form';
      this.disable = false;
    } else {
      this.disable = true;
    }
  }

  updateUser() {
    const data = this.myProfileForm.value;

    if (
      this.myProfileForm.value.password !==
      this.myProfileForm.value.confirmPassword
    ) {
      this.snackBar.openSnackBar('Erro! Senhas diferentes!', 'OK');
    } else {
      this.myProfile.updateUser(data).subscribe({
        next: () => {
          this.snackBar.openSnackBar('Atualizado com sucesso!', 'OK');
        },
        error: () => {
          this.snackBar.openSnackBar('Não foi possivel atualizar!', 'OK');
        },
      });
    }
  }

  toDate(date: any) {
    let parts = date.split('-');
    return `${parts[2]?.substring(0, 2)}/${parts[1]}/${parts[0]}`;
  }

  openModalDeleteUser() {
    this.dialog.openForm();
  }
}
