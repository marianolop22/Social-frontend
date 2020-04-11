import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpUserEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, tap, last, catchError } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

const jwtHelper = new JwtHelperService();

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    //public jwtHelper: JwtHelperService
  ){

  }
  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    if ( sessionStorage.getItem( 'token' ) ) {
      req = req.clone({
        setHeaders: {
          Authorization: `${sessionStorage.getItem( 'token' )}` //enviamos el token de sesion
        }
      });

    }
    return next.handle( req ).pipe ( tap (
      ( event:any ) => {
        if ( event.type == HttpEventType.Response && event.headers.get('authorization') ) {
          sessionStorage.setItem ( 'token', event.headers.get('authorization') ); //actualizamos el token de sesion cuango viene
          
          let tmp = jwtHelper.decodeToken (event.headers.get('authorization'));
          console.log( JSON.parse (   tmp.autorized));
        }
      } ) , catchError ( ( event:any ) => {
        if ( (event.status == 404) || (event.status == 0) ) {
          event.error = { error: event.error, msg: "hubo un error en el servidor, intente nuevamente" };
        }
        return throwError(event);
      } )


    );

  }
}
