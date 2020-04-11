import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBArComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBArComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    SideBArComponent
  ]
})
export class SharedModule { }
