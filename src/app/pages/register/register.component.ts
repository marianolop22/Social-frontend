import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Base } from "src/app/class/base.class";
import { User } from "src/app/models/user.model";
import { LoginService } from "src/app/services/login.service";

import { FadeOut, FadeIn } from "src/app/animations/animations";
import { ErrorService } from 'src/app/services/error.service';

declare var CRUMINA: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    FadeIn,
    FadeOut
  ]
})
export class RegisterComponent extends Base implements OnInit, OnDestroy {

  public usrRePassword: string;
  public user: User = new User();

  constructor(
    private _login: LoginService,
    public _error: ErrorService,
    public ngZone: NgZone
  ) {
    super(_error,ngZone);
  }

  ngOnInit(): void {

    CRUMINA.init_plugins();
    CRUMINA.init_lib_plugins();

  }

  ngOnDestroy(): void {
    this.subMsg$.unsubscribe();
  }

  register ( f: NgForm){

    if ( f.valid ) {
      this.busy();

      this._login.register ( this.user ).subscribe (
        response => {
          console.log ( response );
        }  
      ).add ( ()=> {
        this.notBusy();
      })

    } 
  }

}
