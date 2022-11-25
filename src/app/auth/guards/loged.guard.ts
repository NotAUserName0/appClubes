import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogedGuard implements CanActivate {

  constructor(private cookie : CookieService, private route : Router){}

  canActivate() {
    if(this.cookie.check("token")){
      this.route.navigate(['/entrada']);
      return false;
    }else{
      return true;
    }
  }
  
}
