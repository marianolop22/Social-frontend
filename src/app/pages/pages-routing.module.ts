import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "src/app/services/auth/auth-guard.service";


const routes: Routes = [
  { path: 'home', component: HomeComponent, children:[
    { path: ''                          , pathMatch: 'full', redirectTo: 'noticias'                      },
    // { path:'noticias', loadChildren: './news/news.module#NewsModule' },
    { path:'noticias', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) },
    //{ path:'nosotros', loadChildren: './about/about.module#AboutModule' },
    //{ path:'nosotros', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    //{ path:'contacto', loadChildren: './contact/contact.module#ContactModule' },
    //{ path:'contacto', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
    //{ path:'cuadernocomunicados', loadChildren: './communications-notebook/communications-notebook.module#CommunicationsNotebookModule' },
    //{ path:'cuadernocomunicados', loadChildren: () => import('./communications-notebook/communications-notebook.module').then(m => m.CommunicationsNotebookModule) },
    // { path:'', redirectTo: 'noticias', pathMatch:'full' },
    // { path: '**', pathMatch: 'full', redirectTo: 'servicios' }
  ], canActivate: [ AuthGuardService ], /*canActivateChild: [ AuthGuardService ],*/ data:{ roles:'READER' }, runGuardsAndResolvers: 'always' },
  { path: ''             , pathMatch: 'full', redirectTo: 'ingresar' }
//  { path: '**'           , pathMatch: 'full', redirectTo: 'noencontrada' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
