import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RoleDirective } from './directives/role.directive';
import { GetTokenInfoService } from './services/get-token-info.service';
import {  AuthInterceptorProvider } from './auth/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoPageFoundComponent,
    HomeComponent,
    RoleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookieService,GetTokenInfoService,AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
