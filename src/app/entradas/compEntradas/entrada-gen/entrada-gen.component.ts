import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entrada-gen',
  templateUrl: './entrada-gen.component.html',
  styleUrls: ['./entrada-gen.component.css']
})
export class EntradaGenComponent implements OnInit {

  idLocal : any;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.idLocal = this.rutaActiva.snapshot.paramMap.get("id");
  }

}
