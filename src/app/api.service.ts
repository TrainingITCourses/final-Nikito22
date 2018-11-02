import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getLanzamientos$ = (): Observable<any[]> =>
    this.http.get('assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches),
      )
  public getEstados$ = (): Observable<any[]> =>
    this.http.get('assets/launchstatus.json')
      .pipe(
        // delay(500),
        map((res: any) => res.types),
      )
}
