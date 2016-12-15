import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContactComponent} from "./contacts.component";
import contactsRoutes from "./contacts.routes";
@NgModule({
  imports:[CommonModule, contactsRoutes],
  declarations:[ContactComponent]
})
export default class ContactsModule{}
