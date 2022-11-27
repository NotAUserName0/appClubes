import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GetTokenInfoService } from '../services/get-token-info.service';

@Injectable({
  providedIn: 'root'
})
export class CoordGuardGuard implements CanActivate {

  constructor( private route : Router, private token : GetTokenInfoService){}

  canActivate() {
    var payload = this.token.tokenInfo();
    //console.log(payload.data.role);
    if(payload.data.role == 'ADMIN'){
      return true;
    }else if(payload.data.role == 'COORD'){
        return true;
    }
    else{
      this.route.navigate(['']);
      return false;
    }
  }
  
}
