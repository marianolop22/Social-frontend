import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";



import { RegisterComponent } from './register.component';
import { ComponentsModule } from "src/app/components/components.module";

import { DirectivesModule } from "src/app/directives/directives.module";

const routes: Routes = [
  { path: '', component: RegisterComponent }
]


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ComponentsModule,
    DirectivesModule
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterModule { }