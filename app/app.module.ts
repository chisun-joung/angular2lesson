import {NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import appRoutes from './app.routes';
import {APP_BASE_HREF} from "@angular/common";


@NgModule({
  imports:      [ BrowserModule, appRoutes ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}]
})
export class AppModule { }
