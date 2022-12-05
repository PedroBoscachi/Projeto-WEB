import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token')!
    });
    const params = new HttpParams().set("cpf", localStorage.getItem('cpf')!)
    const requestOptions = {
      headers : headers,
      params: params
    }
    return this.http.get<any>(this.url + '/meu-perfil', requestOptions);
  }

  updateUser(user: Object): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token')!
    });
    const requestOptions = {
      headers : headers
    }
    return this.http.put<any>(this.url + '/editar', user, requestOptions);
  }

  deleteUser(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token')!
    });
    const params = new HttpParams().set("cpf", localStorage.getItem('cpf')!)
    const requestOptions = {
      headers : headers,
      params: params
    }
    return this.http.delete<any>(this.url + '/excluir', requestOptions);
  }
}
