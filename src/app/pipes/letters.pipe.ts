import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letters'
})
export class LettersPipe implements PipeTransform {

  transform( value: string, howManyLetters:number ): any {

    if ( !value ) {
      return null;
    }

    if ( value.length > howManyLetters ) {
      return value.slice (0, howManyLetters) + "...";
    } else {
      return value;
    }
  }

}
