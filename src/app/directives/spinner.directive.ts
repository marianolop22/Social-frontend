import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[spinner]',
  // host: {
  //   '(click)': 'click()'
  //  }
})
export class SpinnerDirective implements OnDestroy {
  
  @Input() spinner:Subject<boolean>;

  constructor( 
    private el:ElementRef) {
  }

  ngOnDestroy(): void {
    
    try {
      this.spinner.unsubscribe();
    } catch (error) {
      console.log ('Error al desuscribir', error);
    }
  }

  @HostListener('click')
  click() {

    if ( this.spinner.observers.length < 2 ) {

      this.spinner
      .pipe ( take(2) )
      .subscribe ( observer => {
        // this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
  
        if (observer) {
          this.el.nativeElement.innerHTML = this.el.nativeElement.textContent + " " + '<i class="fad fa-circle-notch fa-spin"></i>';
        } else {
  
          this.el.nativeElement.innerHTML = this.el.nativeElement.textContent;
        }
        
      });

    } 
  }

}
