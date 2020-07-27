import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";

const routes: Routes = [
  { path: 'ingreso', component: LoginComponent },
  { path: 'registro', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: '', pathMatch: 'full', redirectTo: 'ingreso' },
  { path: '**', pathMatch: 'full', redirectTo: 'ingreso' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash: true, 
        relativeLinkResolution: 'corrected' //Esta configuracion es para que funcione relativeTo con lazyload
      }   
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
