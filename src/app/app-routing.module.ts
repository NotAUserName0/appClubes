import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', children: [
    {path: 'entrada', loadChildren: () => import('./entradas/entradas.module').then(res => res.EntradasModule)},
    {path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(res => res.PerfilModule)},
    {path: 'mensajes', loadChildren: () => import('./mensajes/mensajes.module').then(res => res.MensajesModule)},
    {path: 'configuracion', loadChildren: () => import('./configuracion/configuracion.module').then(res => res.ConfiguracionModule)},
    {path: '**', redirectTo: 'entrada'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
