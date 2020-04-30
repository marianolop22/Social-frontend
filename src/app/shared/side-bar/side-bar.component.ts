import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {

    //Estos eventos manejan la apertura y cierre del menu de la izquierda
    $(".js-sidebar-open").on('click', function () {
      var mobileWidthApp = $('body').outerWidth();
      if(mobileWidthApp <= 560) {
        $(this).closest('body').find('.popup-chat-responsive').removeClass('open-chat');
      }
  
          $(this).toggleClass('active');
          $(this).closest($('.fixed-sidebar')).toggleClass('open');
          return false;
      });

      $(window).keydown(function (eventObject) {
        if (eventObject.which == 27 && $('.fixed-sidebar').is(':visible')) {
          $('.fixed-sidebar').removeClass('open');
        }
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest($('.fixed-sidebar')).length && $('.fixed-sidebar').is(':visible')) {
          $('.fixed-sidebar').removeClass('open');
        }
    });


    $(".js-sidebar-option").on('click', function () {
      if ($('.fixed-sidebar').is(':visible')) {
        $('.fixed-sidebar').removeClass('open');
      }
      });    



  }

}
