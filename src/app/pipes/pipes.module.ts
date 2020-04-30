import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from "./safe.pipe";
import { LettersPipe } from "./letters.pipe";
import { WordsPipe } from "./words.pipe";

@NgModule({
  declarations: [
    SafePipe,
    LettersPipe,
    WordsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    LettersPipe,
    WordsPipe
  ]
})
export class PipesModule { }
