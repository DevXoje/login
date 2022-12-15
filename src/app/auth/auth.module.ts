import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './routing/auth-routing.module';
import {LoginComponent} from './containers/login.component';
import {CoreModule} from "../core/core.module";
import {FormUserComponent} from "./components/form-user.component";
import {EditComponent} from "./containers/edit.component";
import {RegisterComponent} from "./containers/register.component";
import {AuthLayoutComponent} from "./layout/auth.layout";
import {AuthTemplateComponent} from "./components/auth.template.component";

const AUTH_COMPONENTS = [
  AuthLayoutComponent,
  LoginComponent,
  FormUserComponent,
  EditComponent,
  RegisterComponent,
  AuthTemplateComponent
];

@NgModule({
  declarations: [
    AUTH_COMPONENTS
  ],
  imports: [
    CommonModule,
    CoreModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {
}
