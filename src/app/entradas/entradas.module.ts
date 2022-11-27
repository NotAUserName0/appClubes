import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { EntradaMainComponent } from './compEntradas/entrada-main/entrada-main.component';
import { EntradaGenComponent } from './compEntradas/entrada-gen/entrada-gen.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EntradaMainComponent,
    EntradaGenComponent
  ],
  imports: [
    CommonModule,
    EntradasRoutingModule
    
  ]
})
export class EntradasModule { }
