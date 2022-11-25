import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(private cookie : CookieService, private route : Router){}

  canActivate() {
    if(this.cookie.check("token")){
      return true;
    }else{
      this.route.navigate(['/auth/login']);
      return false;
    }
    
  }
  
}
