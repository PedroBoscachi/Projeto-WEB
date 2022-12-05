import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token')!
    });
    const params = new HttpParams().set("cpf", localStorage.getItem('cpf')!)
    const requestOptions = {
      headers : headers,
      params: params
    }
    return this.http.get<any>(`${this.url}/cadastrados`, requestOptions);
  }

  updateSchedule(schedule: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token')!
    });
    const requestOptions = {
      headers : headers
    }
    return this.http.put<any>(`${this.url}/editar`, schedule, requestOptions);
  }

  deleteScheduling(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': localStorage.getItem('token')!
    });
    const params = new HttpParams().set("id", id)
    const requestOptions = {
      headers : headers,
      params: params
    }
    return this.http.delete<any>(`${this.url}/excluir`, requestOptions);
  }
}
