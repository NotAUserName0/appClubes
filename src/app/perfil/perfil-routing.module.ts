import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilMainComponent } from './compPerfil/perfil-main/perfil-main.component';

const routes: Routes = [
  {path:'', component: PerfilMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
