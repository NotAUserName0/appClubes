import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { AdminRoleGuard } from './guardsApp/adminRole.guard';
import { CoordGuardGuard } from './guardsApp/coord-guard.guard';

import { SessionGuard } from './guardsApp/session.guard';

const routes: Routes = [

  {path:'', component:HomeComponent, children:[ //guard
    {path: '', redirectTo: 'entrada', pathMatch: 'full'},
    {path: 'entrada', loadChildren: () => import('./entradas/entradas.module').then(res => res.EntradasModule)},
    {path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(res => res.PerfilModule)},
    {path: 'mensajes', loadChildren: () => import('./mensajes/mensajes.module').then(res => res.MensajesModule)},
    {path: 'configuracion', loadChildren: () => import('./configuracion/configuracion.module').then(res => res.ConfiguracionModule)},
    {path: 'users', loadChildren: () => import('./usuarios/usuarios.module').then(res => res.UsuariosModule), canActivate:[CoordGuardGuard]},
    {path: 'coordinador', loadChildren: () => import('./coordinador/coordinador.module').then(res => res.CoordinadorModule), canActivate:[AdminRoleGuard]},
  ],canActivate:[SessionGuard]},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(res => res.AuthModule)},
  {path: '', redirectTo:'', pathMatch: 'full'},
  {path:'**', component: NoPageFoundComponent}

];

// User -> entrada, perfil,mensajes, config , solo puede borrar sus propias entradas
// Moderador -> entrada, perfil, mensajes, config, addUser, puede borrar todas las entradas
// Admin -> entrada, perfil, mensajes, config, addMod, puede borrar todo

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
