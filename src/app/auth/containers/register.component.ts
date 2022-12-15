import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
//import {Store} from '@ngxs/store';
//import {Signup} from '../state';
import {Observable} from 'rxjs';
import {Field} from "../../core/form/field/models/field";
import {FieldControlService} from "../../core/form/field/services/field-control.service";
import {RegisterData} from "../models/auth.model";
import {Link} from "../../core/models";

//import {RegisterData} from '../domain/auth.model';

@Component({
  selector: 'app-register',
  template: `
      <app-form-user
              (sendPayload)="registerHandler($event)"
              [extra_link]="extra_link"
              [only]="['name','email','password','password_confirmation']"
              [title]="'Create User'"></app-form-user>
  `,
})
export class RegisterComponent implements OnInit {
  extra_link: Link = {
    path: '/auth/login',
    text: "¡Ya estoy registrado!"
  };

  fields$?: Observable<Field<any>[]>;

  constructor(
    private fieldService: FieldControlService,
    //private store: Store,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  registerHandler(event: RegisterData) {
    /*	this.store.dispatch(new Signup(event)).subscribe({
        next: (response) => this.router.navigateByUrl('/login'),
        error: (error) => console.error(error),
      });*/
    //this.authService.mockAuth('customer');//MOCK
    //const savedToken = this.authService.checkToken();
    //this.authService.checkRole(savedToken);
  }


}
