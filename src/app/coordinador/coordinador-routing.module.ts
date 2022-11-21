import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoordiMainComponent } from './compCoordi/coordi-main/coordi-main.component';

const routes: Routes = [
  {path:'', component: CoordiMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadorRoutingModule { }
