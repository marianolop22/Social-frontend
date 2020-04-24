import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

//Ruteo
import { PagesRoutingModule } from "./pages-routing.module";

//Componentes del proyecto
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

//admin modulo
//import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [
  HomeComponent
],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    PagesRoutingModule,
    SharedModule,
   // AdminModule
  ]
})
export class PagesModule { }
