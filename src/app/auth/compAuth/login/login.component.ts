import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService, private router : Router) { }

  log = new FormGroup({
    user : new FormControl('link',[Validators.required]),
    pass : new FormControl('root',[Validators.required])
  });

  ngOnInit(): void {
  }

  login(){
    //console.log(JSON.stringify(this.log.value));
    this.userService.loger(JSON.stringify(this.log.value)).subscribe(
      respuesta => {
        console.log(respuesta);
      }
    )
  }

}
