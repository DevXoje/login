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
import {SocialLoginComponent} from './components/social-login/social-login.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";

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
    AUTH_COMPONENTS,
    SocialLoginComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    AuthRoutingModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err: any) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
})
export class AuthModule {
}
