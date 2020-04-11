import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginService } from "src/app/services/login.service";

import { Base } from "src/app/class/base.class";
import { User } from 'src/app/models/user.model';
import { UserService } from "src/app/services/user.service";

declare function init_plugins();
declare function init_lib_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends Base implements OnInit {

  public user: User;

  constructor(
    private _login: LoginService,
    private _user: UserService,
    private router: Router
  ) {
    super();
    this.user = new User();
  }

  ngOnInit(): void {

    let isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    if ( isIEOrEdge ) {
      alert ( "Estás usando un explorador no compatible, por favor usa Firefox, Chrome o Safari" );
    }

    sessionStorage.clear();
    localStorage.clear();
    
    init_plugins();
    init_lib_plugins();

  }

  public login ( f: NgForm) {

    if ( f.valid ) {
      this._login.login ( this.user ).subscribe (
        response => {
          this._user.setUser ( response.entity );
          this.router.navigate (['home']);
        },
        reject => {
          console.log ( reject );
        }
      ).add ( () => { 
        console.log ("termino el servicio");
      });
    }







  }



}
