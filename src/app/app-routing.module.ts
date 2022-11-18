import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { EntradasComponent } from './components/entradas/entradas.component';
import { MainComponent } from './components/main/main.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path:'', redirectTo : 'home', pathMatch : 'full'},
  {path:'home', component : MainComponent},
  {path:'entradas', component : EntradasComponent},
  {path:'mensajes', component : MensajesComponent},
  {path:'perfil', component: PerfilComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
  {path:'**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
