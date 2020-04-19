import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[spinner]',
  host: {
    '(click)': 'click()'
   }
})
export class SpinnerDirective {
  
  @Input() spinner:Observable<boolean>;

  constructor( 
    //private renderer: Renderer2,
    private el:ElementRef) {
  }

  // @HostListener('click')
  // onClick() {
  click() {

    this.el.nativeElement.innerHTML = this.el.nativeElement.textContent + " " + '<i class="fad fa-circle-notch fa-spin"></i>';

    this.spinner
    .pipe ( take(1) )
    .subscribe ( observer => {
      // this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
      this.el.nativeElement.innerHTML = this.el.nativeElement.textContent;
      
    });

    //this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');

  }

}
