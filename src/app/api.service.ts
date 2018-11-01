import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'assets\launchagencies.json';

  constructor(private http: HttpClient) { }

  public getLanzamientos$ = () => this.http.get(this.url);
}
