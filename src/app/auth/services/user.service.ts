import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Responses } from '../models/responses.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL="http://localhost/api-prueba-login/";

  constructor(private http: HttpClient) { }

  loger(user:any):Observable<Responses>{
    console.log(user);
    return this.http.post<Responses>(`${this.URL}user/index`,user);
  }


}
