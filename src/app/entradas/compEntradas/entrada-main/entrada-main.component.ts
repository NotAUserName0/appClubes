import { Component, OnInit } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';

@Component({
  selector: 'app-entrada-main',
  templateUrl: './entrada-main.component.html',
  styleUrls: ['./entrada-main.component.css']
})
export class EntradaMainComponent implements OnInit {

  constructor(private pruebaService : PruebaService) { }

  ngOnInit(): void {
    this.solicitud();
  }

  solicitud(){
    this.pruebaService.prueba().subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
