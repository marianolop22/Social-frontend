import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { LoginService, UserService, ErrorService, LoadJSService } from "src/app/services/service.index";

import { Base } from "src/app/class/base.class";
import { User } from 'src/app/models/user.model';


import { FadeIn, FadeOut } from "src/app/animatios/animations";


declare var CRUMINA:any; //  init_plugins();


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
  public submitted: boolean = false;

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
    
    CRUMINA.init_plugins();
    CRUMINA.init_lib_plugins();




  }

  public login ( f: NgForm) {

    if ( f.valid ) {
      this.busy();

        
        this._login.login ( this.user ).subscribe (
          response => {
            this._user.setUser ( response.entity );
            this.router.navigate (['home']);
  
          }
        ).add ( () => { 
          
          this.notBusy();
        });

    }

  }

  show (f: NgForm) {
    console.log('hice click');
    //this.spin.next ( true );
    //this.spin.next ( true );

    console.log('estado del formulario ', f.submitted  == false );
    

  }

}
