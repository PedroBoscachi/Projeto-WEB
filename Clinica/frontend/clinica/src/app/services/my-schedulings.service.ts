import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MySchedulingsService {
  url = environment.apiURL + '/agendamento';

  constructor(private http: HttpClient) {}

  getSchedulings(token: string, cpf: string): Observable<any> {
    return this.http.post<any>(`${this.url}/cadastrados`, { token, cpf });
  }

  updateSchedule(schedule: any): Observable<any> {
    return this.http.put<any>(`${this.url}/editar`, schedule);
  }

  deleteScheduling(id: string, token: string): Observable<any> {
    return this.http.post<any>(`${this.url}/excluir`, { id, token });
  }
}
