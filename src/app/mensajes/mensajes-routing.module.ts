import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsgMainComponent } from './compMsg/msg-main/msg-main.component';

const routes: Routes = [
  {path: '', component: MsgMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensajesRoutingModule { }
