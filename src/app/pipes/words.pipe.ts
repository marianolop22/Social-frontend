import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words'
})
export class WordsPipe implements PipeTransform {

  transform( value: string, howManyWords:number ): any {

    if ( !value ) {
      return null;
    }

    let wordsArray: Array<string> = value.split (" ");
    let counterCharacters: number = 0;

    if ( wordsArray.length > howManyWords ) {

      for ( let i = 0; i < howManyWords; i++ ) {
        counterCharacters += wordsArray[i].length + 1; 
      }
      return value.slice (0, counterCharacters-1) + "...";
    } else {
      return value;
    }
  }

}
