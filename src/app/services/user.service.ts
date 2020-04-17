import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User = new User ();

  constructor(private http: HttpClient) { };

  public setUser ( user: User ) {
    this.user.set ( user );
    sessionStorage.setItem ( 'user', JSON.stringify ( this.user.get() ) );
  }

  public getUser ():User {
    return this.user;
  }


}
