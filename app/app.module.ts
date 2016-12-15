import {NgModule}      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { HomeComponent } from  './home/home.component';
import appRoutes from './app.routes';
import {APP_BASE_HREF} from "@angular/common";
import {ContactComponent} from "./contacts/contacts.component";



@NgModule({
  imports:      [ BrowserModule, appRoutes ],
  declarations: [ AppComponent, HomeComponent, ContactComponent ],
  bootstrap:    [ AppComponent ],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}]
})
export class AppModule { }
