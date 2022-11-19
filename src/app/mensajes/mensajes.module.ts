import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MensajesRoutingModule } from './mensajes-routing.module';
import { MsgMainComponent } from './compMsg/msg-main/msg-main.component';


@NgModule({
  declarations: [
    MsgMainComponent
  ],
  imports: [
    CommonModule,
    MensajesRoutingModule
  ]
})
export class MensajesModule { }
