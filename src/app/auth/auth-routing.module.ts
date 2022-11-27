import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './compAuth/login/login.component';
import { LogedGuard } from './guards/loged.guard';
import { UserService } from './services/user.service';

const routes: Routes = [
  {path: '', children:[
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component:LoginComponent,canActivate:[LogedGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes),HttpClientModule],
  exports: [RouterModule],
  providers: [
    UserService
  ]
})
export class AuthRoutingModule { }
