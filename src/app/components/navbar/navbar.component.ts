import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GetTokenInfoService } from 'src/app/services/get-token-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:string;

  constructor(private cookie : CookieService, private route : Router
              ,private token : GetTokenInfoService) { }

  ngOnInit(): void {
    var payload = this.token.tokenInfo();
    this.user = payload.data.user;
  }

  logout(){
    this.cookie.delete("token");
    this.route.navigate(['/auth/login']);
  }

}
