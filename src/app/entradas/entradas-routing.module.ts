import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaMainComponent } from './compEntradas/entrada-main/entrada-main.component';
import { PostsService } from './services/posts.service';


const routes: Routes = [
  {path: '' , component: EntradaMainComponent},
  //{path: 'addEntrada/:id', component: EntradaGenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    PostsService
  ]
})
export class EntradasRoutingModule { }
