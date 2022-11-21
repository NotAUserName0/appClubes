import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGenComponent } from './compUser/user-gen/user-gen.component';

const routes: Routes = [
  {path: '', component: UserGenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
