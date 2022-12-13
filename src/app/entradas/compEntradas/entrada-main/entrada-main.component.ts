import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Entrada } from '../../models/entrada.model';


import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-entrada-main',
  templateUrl: './entrada-main.component.html',
  styleUrls: ['./entrada-main.component.css']
})
export class EntradaMainComponent implements OnInit {

  entradas : Entrada[];
  errorLog:boolean;
  added:boolean;
  addedError:boolean;
  suscription:Subscription;

  constructor(private postService:PostsService, private router:Router) { }

  addPost = new FormGroup({
    contenido : new FormControl( '' ,Validators.required),
  }
  );

  ngOnInit(): void {
   this.getPost();
  }

  getPost(){
    this.postService.getPosts().subscribe(
      result => {
        console.log(result);
        this.entradas = result;
      }
    );
  }

  publicar(){

    if(this.addPost.invalid){
      this.errorLog = true;
    }else{
      this.errorLog = false;
      let fecha = new Date().getFullYear() + "-"+ (new Date().getMonth()+1) + "-" + new Date().getDate();
      console.log(fecha);
      let hora = (new Date().getHours())+":"+new Date().getMinutes();
      console.log(hora);
      let contenido = this.addPost.value.contenido;
      console.log(contenido);

      let buffer = {contenido:contenido,fecha:fecha,hora:hora};

      this.postService.pushPost(buffer).subscribe(
        respuesta => {
            console.log(respuesta);
            if(respuesta.message == 'exito'){
              this.added = true;
              this.addPost.reset();
            }else{
              this.addedError = true;
            }
        }
      );

    }
  }


}
