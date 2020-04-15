import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

//Interceptor
import { AuthInterceptor } from "./interceptor/interceptor";

import {  
  LoginService,
  UserService,
  NewsService
} from "./service.index";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    UserService,
    NewsService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class ServicesModule { }
