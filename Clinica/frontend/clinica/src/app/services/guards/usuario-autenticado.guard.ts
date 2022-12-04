import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from '../signin.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate {
  constructor(private router: Router, private signinService : SigninService, private snackBar: MatSnackBar){}

  openSnackBar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
      panelClass: ['snackBar'],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  canActivate(){
    if(this.signinService.logado){
      return true;
    }
    this.router.navigate(['/']);
    this.openSnackBar('Usuário não autenticado!');
      return false;
  }
}
