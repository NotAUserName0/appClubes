import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './compAuth/login/login.component';
import { LogoutComponent } from './compAuth/logout/logout.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'logout', component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
