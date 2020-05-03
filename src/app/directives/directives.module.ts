import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareValidatorDirective } from "./compare-validator.directive";
import { SpinnerDirective } from './spinner.directive';
import { DndDirective } from './dnd.directive';

@NgModule({
  declarations: [
    CompareValidatorDirective,
    SpinnerDirective,
    DndDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CompareValidatorDirective,
    SpinnerDirective,
    DndDirective
  ]
})
export class DirectivesModule { }
