import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  url = environment.apiURL + '/usuario';

  constructor(private http: HttpClient) {}

  returnUser(): Observable<any> {
    let body = {
      token: localStorage.getItem('token'),
      cpf: localStorage.getItem('cpf'),
    };
    return this.http.post<any>(this.url + '/meu-perfil', body);
  }

  updateUser(user: Object): Observable<any> {
    let body = {
      user: user,
      token: localStorage.getItem('token'),
    };

    return this.http.put<any>(this.url + '/editar', body);
  }

  deleteUser(): Observable<any> {
    let body = {
      cpf: localStorage.getItem('cpf'),
      token: localStorage.getItem('token'),
    };

    return this.http.post<any>(this.url + '/excluir', body);
  }
}
