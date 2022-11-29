import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private cookie : CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this.getToken();

    /*if(!token){
      return next.handle(request);
    }*/

    const headers = request.clone({
      headers: request.headers.set('Authorization',`Bearer ${token}`)
    });

    return next.handle(headers);
  }

  getToken(){
    return this.cookie.get('token');
  }
}