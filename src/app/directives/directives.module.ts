import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareValidatorDirective } from "./compare-validator.directive";
import { SpinnerDirective } from './spinner.directive';

@NgModule({
  declarations: [
    CompareValidatorDirective,
    SpinnerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompareValidatorDirective,
    SpinnerDirective
  ]
})
export class DirectivesModule { }
