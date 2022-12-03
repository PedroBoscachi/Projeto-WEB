import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  url = environment.apiURL + '/login/entrar';

  constructor(private http: HttpClient) {}

  signin(user: any): Observable<any> {
    return this.http.post<any>(this.url, user);
  }
}
