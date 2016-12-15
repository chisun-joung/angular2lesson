
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ContactComponent} from "./contacts/contacts.component";
const routes = [
  {path: '', component:HomeComponent},
  {path: 'contacts', component:ContactComponent}
]

export default RouterModule.forRoot(routes);
