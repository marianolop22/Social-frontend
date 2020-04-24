import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBArComponent } from './side-bar/side-bar.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBArComponent,
    BackToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    SideBArComponent,
    BackToTopComponent
  ]
})
export class SharedModule { }
