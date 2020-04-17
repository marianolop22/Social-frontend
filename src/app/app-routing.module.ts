import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
//import { RegisterComponent } from "./pages/register/register.component";

const routes: Routes = [
  { path: 'ingreso', component: LoginComponent },
  { path: 'registro', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: '', pathMatch: 'full', redirectTo: 'ingreso' },
  //{ path: '**', pathMatch: 'full', redirectTo: 'ingreso' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
