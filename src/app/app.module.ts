import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Modulos del proyecto
import { ClassModule } from "./class/class.module";
import { ComponentsModule } from "./components/components.module";
import { PagesModule } from "./pages/pages.module";
import { ServicesModule } from "./services/services.module";
import { DirectivesModule } from "./directives/directives.module";

//Variables de entorno
import { environment } from "src/environments/environment";

//Solo el login
import { LoginComponent } from './pages/login/login.component';

//Clases
import { HttpErrorsHandler } from "src/app/class/error-handler.class";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ClassModule,
    ComponentsModule,
    PagesModule,
    ServicesModule,
    DirectivesModule,
    //SharedModule
  ],
  providers: [
    {
      provide: ErrorHandler, useClass: HttpErrorsHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
