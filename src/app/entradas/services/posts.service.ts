import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Entrada } from '../models/entrada.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  URL="http://localhost/api-prueba/";

  constructor(private http: HttpClient) { }

  getPosts():Observable<Entrada[]>{
    return this.http.get<Entrada[]>(`${this.URL}posts/index`);
  }

  pushPost(post:any):Observable<Entrada>{
    return this.http.post<Entrada>(`${this.URL}posts/index`,post);
  }
  
}
