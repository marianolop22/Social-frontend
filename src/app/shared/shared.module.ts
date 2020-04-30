import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';


@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    BackToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    SideBarComponent,
    BackToTopComponent
  ]
})
export class SharedModule { }
