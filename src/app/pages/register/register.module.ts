import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";



import { RegisterComponent } from './register.component';
import { ComponentsModule } from "src/app/components/components.module";

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
    ComponentsModule
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterModule { }