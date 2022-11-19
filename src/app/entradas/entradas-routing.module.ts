import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaGenComponent } from './compEntradas/entrada-gen/entrada-gen.component';
import { EntradaMainComponent } from './compEntradas/entrada-main/entrada-main.component';

const routes: Routes = [
  {path: '' , component: EntradaMainComponent},
  {path: 'addEntrada/:id', component: EntradaGenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }
