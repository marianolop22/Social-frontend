import { Component, OnInit } from '@angular/core';

import { UserService } from "src/app/services/user.service";

declare var $ :any;
declare function init_plugins();
declare function init_lib_plugins();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _user: UserService
  ) {
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   $('[data-toggle="tooltip"]').tooltip();
    // }, 500);

    init_plugins();
    init_lib_plugins();

  }

}
