
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from '../user.service';
import { Role } from 'src/app/models/role.model';

//import decode from 'jwt-decode';
const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor( private router: Router,
               private _user: UserService ) {
    if ( sessionStorage.getItem ( 'user' ) ) {
      this._user.setUser ( JSON.parse ( sessionStorage.getItem( 'user' ) ) );
    }
  }

  canActivate ( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ):Observable<boolean> | Promise<boolean> | boolean {

    let accessToken:string = null;
    let hasRole: boolean = false;

    return true;

    // if ( sessionStorage.getItem ( 'token' ) ){
    //   accessToken = sessionStorage.getItem ( 'token' );

    //   //decodifico el token, saco la lista de roles y verifico si posee el rol necesario
    //   let tmp:Array<Role> = JSON.parse ( ( jwtHelper.decodeToken ( accessToken ) ).autorized );
    //   hasRole = tmp.find ( item => item.code == next.data.roles ) ? true: false;
    // }

    // if ( accessToken && !jwtHelper.isTokenExpired( accessToken ) ) { //&& sessionStorage.getItem ( 'employee' ) && !jwtHelper.isTokenExpired( accessToken ) ) {
    //   if ( hasRole ) {
    //     return true;
    //   } else {
    //     sessionStorage.clear();
    //     this.router.navigate( ['ingreso'] );
    //     alert ( "No tenes permiso para ingresar a esta página" );
    //     return false;
    //   }

    // } else {
    //   alert ( "Debes loguearte o tu sesión ha expirado" );
    //   sessionStorage.clear();

    //   this.router.navigate( ['ingreso'] );
    //   return false;
    // }
  }

  canActivateChild ( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ):Observable<boolean> | Promise<boolean> | boolean {

    return true;

    // let accessToken:string = null;
    // let hasRole: boolean = false;

    // if ( sessionStorage.getItem ( 'token' ) ){
    //   accessToken = sessionStorage.getItem ( 'token' );
    // }

    // if ( accessToken && !jwtHelper.isTokenExpired( accessToken ) ) { //&& sessionStorage.getItem ( 'employee' ) && !jwtHelper.isTokenExpired( accessToken ) ) {
    //   if ( next.data.roles ) {
    //     if ( hasRole = this._user.hasRole ( next.data.roles ) ) {
    //       return true; //hay rol y tiene permiso, dejo continuar
    //     } else {
    //       alert ( "No tenes permiso para ingresar a esta página" ); //no tiene permiso para ingresar
    //       return false;
    //     }
    //   } else {
    //     return true; //no hay role para ingresar
    //   }
    // } else {
    //   alert ( "Debes loguearte o tu sesión ha expirado" );
    //   sessionStorage.clear();
    //   this.router.navigate( ['ingresar'] );
    //   return false;
    // }


  }

}

