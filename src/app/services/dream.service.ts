import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DreamService {

  url:string = 'https://api.db-ip.com/v2/free/self'
  constructor(private http:HttpClient) { }

  $clicker() :Observable<any>{
    return this.http.get<any>(this.url);
  }
}
