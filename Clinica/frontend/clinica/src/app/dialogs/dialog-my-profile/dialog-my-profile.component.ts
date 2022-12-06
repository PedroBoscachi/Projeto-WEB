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
        this.myProfileForm.patchValue(response.user);
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
    const ano = this.myProfileForm.value.birthDate!.toString().split(" ");

    if (parseInt(ano[3]) > 2004)
    return this.snackBar.openSnackBar('Erro! Você precisa ser maior de idade!', 'OK');

    if (
      this.myProfileForm.value.password !==
      this.myProfileForm.value.confirmPassword
    )
      return this.snackBar.openSnackBar('Erro! Senhas diferentes!', 'OK');

    if (this.myProfileForm.value.password!.length < 8)
      return this.snackBar.openSnackBar(
        'Erro! Insira uma senha maior que 8 caracteres!',
        'OK'
      );

    this.myProfile.updateUser(data).subscribe({
      next: () => {
        window.location.reload();
        this.snackBar.openSnackBar('Atualizado com sucesso!', 'OK');
      },
      error: () => {
        this.snackBar.openSnackBar('Não foi possivel atualizar!', 'OK');
      },
    });
  }

  openModalDeleteUser() {
    this.dialog.openForm();
  }
}
