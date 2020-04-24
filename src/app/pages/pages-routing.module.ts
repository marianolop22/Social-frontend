import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "src/app/services/auth/auth-guard.service";


const routes: Routes = [
  { path: 'home', component: HomeComponent, children:[
    { path: '', pathMatch: 'full', redirectTo: 'noticias'},
    { path:'noticias', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
    //{ path:'admin/listanoticias', loadChildren: () => import('./admin/posts/post-list/post-list.module').then(m => m.PostListModule) },
    {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)  }


    
  ], canActivate: [ AuthGuardService ], /*canActivateChild: [ AuthGuardService ],*/ data:{ roles:'READER' }, runGuardsAndResolvers: 'always' },
  { path: ''             , pathMatch: 'full', redirectTo: 'ingresar' }
//  { path: '**'           , pathMatch: 'full', redirectTo: 'noencontrada' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
