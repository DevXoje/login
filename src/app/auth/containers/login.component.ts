import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FieldControlService} from "../../core/form/field/services/field-control.service";
import {LoginData} from "../models/auth.model";
import {Link} from "../../core/models";

@Component({
  selector: 'app-login',
  template: `
      <!--<main class="form-signin">
          <form [formGroup]="loginForm">
              <h1 class="h3 mb-3 fw-normal">Sign In</h1>
              <div class="form-floating">
                  <input class="form-control" formControlName="username" id="floatingInput" type="email">
                  <label for="floatingInput">Username</label>
                  <div *ngIf="loginForm.invalid && usernameControl?.touched && usernameControl.errors">
                      <span *ngIf="usernameControl.errors['required']">Username is required</span>
                      <span *ngIf="usernameControl.errors['email']">Username must be an email</span>
                  </div>
              </div>
              <div class="form-floating">
                  <input class="form-control" formControlName="password" id="floatingPassword" type="password">
                  <label for="floatingPassword">Password</label>
                  <div *ngIf="loginForm.invalid && passwordControl?.touched && passwordControl.errors">
                      <span *ngIf="passwordControl.errors['minlength']">Password must have at least 8 characters</span>
                  </div>
              </div>
              <button [disabled]="this.loginForm.invalid" class="w-100 btn btn-lg btn-primary" type="submit">Sign in
              </button>
          </form>
      </main>-->
      <app-form-user
              (sendPayload)="loginHandler($event)"
              [extra_link]="extra_link"
              [only]="['email','password']"
              [title]="'Login'"
              content></app-form-user>
  `,
  styles: [`
    .box {
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px solid transparent;
      text-decoration: none;
      color: #615f5fdd;

      &:hover, &:active,
      &:visited {
        border: 2px solid #ee82ee;

      }
    }

    .form-signin {
      width: 100%;
      max-width: 330px;
      padding: 15px;
      margin: auto;
    }

    .form-signin .checkbox {
      font-weight: 400;
    }

    .form-signin .form-floating:focus-within {
      z-index: 2;
    }

    .form-signin input[type="email"] {
      margin-bottom: -1px;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
      margin-bottom: 10px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `]
})
export class LoginComponent {
  extra_link: Link = {
    path: '/auth/register',
    text: "¡Necesito una cuenta!"
  };

  constructor(
    fieldService: FieldControlService,
    //private store: Store,
    //private notification: NotificationService,
    private router: Router,
    //private authService: AuthService,
  ) {
  }

  loginHandler(event: LoginData) {
    /* this.store
       .dispatch(new Login(event)) // O SET CUSTOMER DATA
       .subscribe((store_data) => {
         const selectedUser = store_data.auth.selectedUser;
         const route = this.authService.getRouteByRole(selectedUser.role);
         this.router.navigate(route).then(
           (e) => console.log('navigate to: ', route, e),
           (error) => console.log('error: ', error)
         );
         this.notification.showSuccess(
           'Bienvenido ' + selectedUser.name,
           'Login'
         );
       });*/
    console.log(event);
  }

  /*loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl(['', Validators.required, Validators.minLength(5)])
  });

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    const username_field = this.loginForm.get('username') as AbstractControl<string>;
    const password_field = this.loginForm.get('password') as unknown as AbstractControl<string>;
    let username = username_field.value;
    let password = password_field.value;
    this.authenticationService
      .login(username, password)
      .subscribe(() => this.router.navigateByUrl("/"));
  }
  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
*/
}
