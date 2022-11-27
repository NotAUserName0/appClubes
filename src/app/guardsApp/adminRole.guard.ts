import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { GetTokenInfoService } from '../services/get-token-info.service';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleGuard implements CanActivate {

  constructor( private route : Router, private token : GetTokenInfoService){}

  canActivate() {
    var payload = this.token.tokenInfo();
    //console.log(payload.data.role);
    if(payload.data.role == 'ADMIN'){
      return true;
    }else{
      this.route.navigate(['']);
      return false;
    }
  }
  
}
