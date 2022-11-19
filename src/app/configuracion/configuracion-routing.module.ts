import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigMainComponent } from './compoConfig/config-main/config-main.component';

const routes: Routes = [
  {path:'', component: ConfigMainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracionRoutingModule { }
