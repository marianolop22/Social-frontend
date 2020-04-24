import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "src/app/services/auth/auth-guard.service";


const routes: Routes = [
  { path:'listanoticias', loadChildren: () => import('./posts/post-list/post-list.module').then(m => m.PostListModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
