import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDto } from '../dtos/loginDto';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  url = environment.apiURL + '/login/entrar';

  constructor(private http: HttpClient) {}

  signin(user: LoginDto): Observable<LoginDto> {
    return this.http.post<any>(this.url, user);
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
