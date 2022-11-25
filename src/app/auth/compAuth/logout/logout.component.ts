import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route : Router, private cookie : CookieService) { }

  ngOnInit(): void {
    this.cookie.delete("token");
    //alert("token deleted");
    this.route.navigate(['/auth/login']); //separar login de logout y redirigiendo comprobando
                                    //si ya esta cerrada la sesion redirigir si no cerrar sesion
  }

}
