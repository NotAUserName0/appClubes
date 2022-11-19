import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { EntradaMainComponent } from './compEntradas/entrada-main/entrada-main.component';
import { EntradaGenComponent } from './compEntradas/entrada-gen/entrada-gen.component';


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
