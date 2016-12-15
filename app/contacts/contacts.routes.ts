import {ContactComponent} from "./contacts.component";
import {RouterModule} from "@angular/router";
const routes = [
  {path: '', component: ContactComponent}
];
export default RouterModule.forChild(routes);
