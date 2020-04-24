import { ErrorHandler, Injectable} from '@angular/core';
import { ErrorService } from 'src/app/services/service.index';
import { of, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


    @Injectable()
    export class HttpErrorsHandler implements ErrorHandler {

      constructor (
        private _error: ErrorService
      ) {}

      handleError(error: Error) {
         // Do whatever you like with the error (send it to the server?)
         // And log it to the console
        console.log ('manejador de errore ', error );

        if ( error instanceof HttpErrorResponse ) {
          this._error.sendError (error);
        } else {
          throw error;
        }

        
      }
    }