import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MyProfileService {
  url = environment.apiURL + '/usuario/meu-perfil';

  constructor(private http: HttpClient) {}

  returnUser(): Observable<any> {
    let body = {
      token: localStorage.getItem('token'),
      cpf: localStorage.getItem('cpf')
    };
    return this.http.post<any>(this.url, body);
  }
}
