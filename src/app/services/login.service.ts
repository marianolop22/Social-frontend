import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private http: HttpClient
  ) { }

  public login (user:User): Observable<any> {

    return this.http.post ( `${environment.urlApi}/users/loginUser`, { email: user.email, password: user.password} );
  }

  public register ( user:User ): Observable<any> {
    return this.http.post ( `${environment.urlApi}/users/registerUser`, { email: user.email, password: user.password} );
  }


}
