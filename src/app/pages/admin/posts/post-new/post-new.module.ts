import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostNewComponent } from "./post-new.component";
import { DirectivesModule } from "src/app/directives/directives.module";

const routes: Routes = [
  { path: 'crear', component: PostNewComponent },
  { path: 'editar/:id', component: PostNewComponent },

]


@NgModule({
  declarations: [
    PostNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DirectivesModule
  ],
  exports: [
    RouterModule
  ]
})
export class PostNewModule { }