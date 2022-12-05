import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ScheduleConsultService {
  url = `${environment.apiURL}/agendamento/cadastrar`;

  constructor(private http: HttpClient) {}

  scheduleConsult(schedule: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token')!
    });
    const requestOptions = {
      headers : headers
    }
    return this.http.post<any>(this.url, schedule, requestOptions);
  }
}
