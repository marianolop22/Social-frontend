import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare function init_plugins();
declare function init_lib_plugins();

declare var $ :any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'socialv9';

  constructor (
    private router: Router
  ) {

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     console.log ('cambio de ruta');
    //   }
    // });


  }
  ngOnInit(): void {
  }

}
