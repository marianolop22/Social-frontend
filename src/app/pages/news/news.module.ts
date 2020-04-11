import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';

import { ComponentsModule } from "src/app/components/components.module";

const routes: Routes = [
  { path: '', component: NewsComponent }
]

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class NewsModule { }

