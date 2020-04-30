import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //Se trae esta funcion de la libreria ya que no la estaba tomando
    // setTimeout ( ()=> {
    //   $('.back-to-top').on('click', function () {
    //         $('html,body').animate({
    //             scrollTop: 0
    //         }, 1200);
    //         return false;
    //     });
    // });




//     init_plugins();
// init_lib_plugins();

  }

  backToTop () {
    window.scrollTo ({ left: 0, top: 0, behavior: 'smooth' });
  }

}
