import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorMessage:Subject<Error> = new Subject<Error>();

  constructor() { }

  public sendError ( error: Error ) {
    this.errorMessage.next ( error );
  }

  public getError ():Observable<any> {
    return this.errorMessage.asObservable();
  }

}
