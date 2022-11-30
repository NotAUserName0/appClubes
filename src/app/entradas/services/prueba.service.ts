import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prueba } from '../models/prueba.model';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  URL="http://localhost/api-prueba-login/";
  //http://localhost/api-prueba/

  constructor(private http: HttpClient) { }

  prueba():Observable<Prueba>{
    return this.http.get<Prueba>(`${this.URL}user/index`);
  }
}
