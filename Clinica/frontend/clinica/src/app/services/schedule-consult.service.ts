import { HttpClient } from '@angular/common/http';
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
    return this.http.post<any>(this.url, schedule);
  }
}
