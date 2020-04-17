import { ErrorHandler, Injectable} from '@angular/core';
import { ErrorService } from 'src/app/services/service.index';

    @Injectable()
    export class HttpErrorsHandler implements ErrorHandler {

      constructor (
        private _error: ErrorService
      ) {}

      handleError(error: Error) {
         // Do whatever you like with the error (send it to the server?)
         // And log it to the console
         this._error.errorMessage.next ( error );
      }
    }