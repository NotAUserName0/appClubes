import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaGenComponent } from './compEntradas/entrada-gen/entrada-gen.component';
import { EntradaMainComponent } from './compEntradas/entrada-main/entrada-main.component';
import { PruebaService } from './services/prueba.service';

const routes: Routes = [
  {path: '' , component: EntradaMainComponent},
  {path: 'addEntrada/:id', component: EntradaGenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule],
  providers: [
    PruebaService
  ]
})
export class EntradasRoutingModule { }
