import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "../containers/login.component";
import {AuthTemplateComponent} from "../components/auth.template.component";
import {RegisterComponent} from "../containers/register.component";


const outlet = 'authOutlet';
const routes: Routes = [
  {
    path: 'login',
    component: AuthTemplateComponent,

    children: [
      {
        path: '',
        component: LoginComponent,
        outlet
      }
    ]
  },
  {
    path: 'register',
    component: AuthTemplateComponent,
    children: [
      {
        path: '',
        component: RegisterComponent,
        outlet
      }
    ]
  }


];
export const AUTH_ROUTES = RouterModule.forChild(routes);
