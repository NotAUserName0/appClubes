import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadorRoutingModule } from './coordinador-routing.module';
import { CoordiMainComponent } from './compCoordi/coordi-main/coordi-main.component';


@NgModule({
  declarations: [
    CoordiMainComponent
  ],
  imports: [
    CommonModule,
    CoordinadorRoutingModule
  ]
})
export class CoordinadorModule { }
