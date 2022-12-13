import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { EntradaMainComponent } from './compEntradas/entrada-main/entrada-main.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        EntradaMainComponent
    ],
    imports: [
        CommonModule,
        EntradasRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class EntradasModule { }
