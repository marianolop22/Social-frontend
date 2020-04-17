import {
    animation, trigger, animateChild, group,
    transition, animate, style, query
  } from '@angular/animations';
  
  export const FadeIn = 
    trigger('fade', [ 
        transition('void => *', [
          style({ opacity: 0 }), 
          animate(1000, style({opacity: 1}))
        ]) 
      ]);

  export const FadeOut = 
    trigger('fadeOut', [
      transition(':leave',
      animate(600, style({opacity: 0})))
    ]);