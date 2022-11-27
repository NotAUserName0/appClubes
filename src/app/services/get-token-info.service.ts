import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GetTokenInfoService {

  constructor(private cookie : CookieService,) { }

  tokenInfo(){
    var token = this.cookie.get("token");
    var tokenSplit = atob(token.split('.')[1]);
    var payload = JSON.parse(tokenSplit);
    return payload;
  }
}
