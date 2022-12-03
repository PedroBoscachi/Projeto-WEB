import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  url = environment.apiURL + '/cadastrar/criar-conta';

  constructor(private http: HttpClient) {}

  signup(user: User): Observable<User> {
    return this.http.post<any>(this.url, user);
  }
}
