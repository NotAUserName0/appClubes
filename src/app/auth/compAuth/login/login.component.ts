import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorLog:boolean;

  constructor(private userService : UserService, private route : Router, private cookie : CookieService) { }

  log = new FormGroup({
    user : new FormControl('jay',[Validators.required]),
    pass : new FormControl('1234',[Validators.required])
  });

  ngOnInit(): void {
    this.cookie.delete("token");
  }

  login(){
    //console.log(JSON.stringify(this.log.value));
    this.userService.loger(JSON.stringify(this.log.value)).subscribe(
      respuesta => {
        if(respuesta.message == "User does'nt exist" || respuesta.message =="Wrong Password"){
          this.errorLog = true;
        }else{
          this.errorLog = false;
          this.cookie.set("token",respuesta.token);
          this.route.navigate(['entrada']);
        } 
      }
    );
  }

}
