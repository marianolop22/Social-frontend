import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginService, UserService, ErrorService } from "src/app/services/service.index";

import { Base } from "src/app/class/base.class";
import { User } from 'src/app/models/user.model';


import { FadeIn, FadeOut } from "src/app/animatios/animations";
import { Subject, Observable } from 'rxjs';

declare function init_plugins();
declare function init_lib_plugins();


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    FadeIn,
    FadeOut
  ]
})
export class LoginComponent extends Base implements OnInit, OnDestroy {

  public user: User;

  constructor(
    private _login: LoginService,
    private _user: UserService,
    private router: Router,
    public _error: ErrorService,
    public ngZone: NgZone
  ) {
    super(_error, ngZone);
  }
  
  ngOnDestroy(): void {
    this.subMsg$.unsubscribe();
  }

  ngOnInit(): void {

    let isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    if ( isIEOrEdge ) {
      alert ( "Estás usando un explorador no compatible, por favor usa Firefox, Chrome o Safari" );
    }

    this.user = new User();
    sessionStorage.clear();
    localStorage.clear();
    
    init_plugins();
    init_lib_plugins();

  }

  public login ( f: NgForm) {

    if ( f.valid ) {
      this.busy();

      setTimeout(() => {
        
        this._login.login ( this.user ).subscribe (
          response => {
            this._user.setUser ( response.entity );
            this.router.navigate (['home']);
  
          }
          // ,
          // reject => {
          //   this.errorMessage = reject.error.msg;
          // }
        ).add ( () => { 
          
          this.notBusy();
        });
      }, 2000);

    }

  }

  show () {
    console.log('hice click');
    //this.spin.next ( true );
    //this.spin.next ( true );

    this.busy();
    
    setTimeout(() => {
      this.notBusy();
    }, 2000);
  }

}
