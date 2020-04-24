import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from "./post-list.component";

import { SharedModule } from "src/app/shared/shared.module";
import { ComponentsModule } from "src/app/components/components.module";

const routes: Routes = [
  { path: '', component: PostListComponent }
]

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ComponentsModule
  ],
  exports: [
    RouterModule
  ]
})
export class PostListModule { }