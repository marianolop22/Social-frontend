import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Base } from "src/app/class/base.class";
import { User } from "src/app/models/user.model";
import { LoginService } from "src/app/services/login.service";

declare function init_plugins();
declare function init_lib_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends Base implements OnInit {

  public usrRePassword: string;
  public user: User = new User();

  constructor(
    private _login: LoginService
  ) {
    super();
  }

  ngOnInit(): void {

    init_plugins();
    init_lib_plugins();

  }

  register ( f: NgForm){

    if ( f.valid ) {

      this._login.register ( this.user ).subscribe (
        response => {
          console.log ( response );
        },
        reject => {
          console.log ( reject);
        }
  
  
      ).add ( ()=> {
        console.log("fin servicio");
        
      })

    }
  }

}
