import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import {Store} from '@ngxs/store';
//import {SetSelectedUser} from "../state";
import {Observable, of} from 'rxjs';
import {Validators} from "@angular/forms";
//import {HttpResponse} from "../../app-common/services/HttpGenericAdapter";
//import {Customer} from "../../customer/domain/customer.model";
import {Field} from "../../core/form/field/models/field";
import {FieldControlService} from "../../core/form/field/services/field-control.service";
import {TextInput} from "../../core/form/field/models/textInput";
import {PasswordInput} from "../../core/form/field/models/passwordInput";
import {Link} from "../../core/models";

@Component({
  selector: 'app-form-user',
  template: `
      <app-form
              (sendPayload)="sendPayload.emit($event)"
              [exclude]="exclude"
              [fields]="fields$ | async"
              [only]="only"
              content></app-form>
      <a *ngIf="extra_link!=undefined" [routerLink]="[extra_link.path]">{{extra_link.text}}</a>
      <!--[extraValidators]="atLeastOneValidator"-->
  `,
})
export class FormUserComponent implements OnInit {
  @Input() only: string[] = [];
  @Input() exclude?: string[];
  @Input() title: string = 'user';
  @Input() extra_link?: Link;
  fields$?: Observable<Field<any>[]> = of([
    new TextInput({
      key: 'name',
      label: 'nombre',
      type: 'text',
      validators: [Validators.required],
      order: 1,
      autocomplete: 'name',
    }),
    new TextInput({
      key: 'email',
      label: 'Email',
      type: 'email',
      validators: [Validators.required, Validators.email],
      order: 2,
      autocomplete: 'email',
    }),
    new TextInput({
      key: 'address',
      label: 'address',
      type: 'text',
      validators: [Validators.required],
      order: 3,
      autocomplete: 'street-address',
    }),
    new TextInput({
      key: 'official_doc',
      label: 'dni',
      type: 'text',
      validators: [Validators.required],//TODO: validar que sea un dni
      order: 4,
    }),
    new PasswordInput({
      key: 'password',
      label: 'Password',
      type: 'password',
      validators: [Validators.required],
      order: 5,
    }),
    new PasswordInput({
      key: 'password_confirmation',
      label: 'Password confirm',
      type: 'password',
      validators: [Validators.required, this.fieldService.matchOtherValidator("password")],
      order: 6,
    }),
    new TextInput({
      key: 'city',
      label: 'ciudad',
      type: 'text',
      validators: [Validators.required],
      order: 7,
      autocomplete: 'address-level2',
    }),
    new TextInput({
      key: 'country',
      label: 'pais',
      type: 'text',
      validators: [Validators.required],
      order: 7,
      autocomplete: 'country',
    }),
    new TextInput({
      key: 'postal_code',
      label: 'codigo postal',
      type: 'text',
      validators: [Validators.required],
      order: 7,
      autocomplete: 'postal-code',
    }),
    new TextInput({
      key: 'state',
      label: 'pais',
      type: 'text',
      validators: [Validators.required,],
      order: 7,
      autocomplete: 'country-name',
    }),
    new TextInput({
      key: 'phone',
      label: 'phone',
      type: 'tel',
      validators: [Validators.required],
      order: 7,
      autocomplete: 'tel',
    }),

  ]);
  //@Input() fields$: Observable<Field<any>[]> | null = null;
  @Output() sendPayload = new EventEmitter<any>();
  id?: number;

  //customer?: Customer;

  constructor(
    private fieldService: FieldControlService,
    //private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    //private customerService: CustomerService
  ) {
    /*const resp = this.route.snapshot.data["customerResp"] as HttpResponse<Customer>
    if (resp) {//Esto deberia gestionarlo edit customer
      this.customer = resp.data;
      this.store.dispatch(new SetSelectedUser(this.customer.id));
    }*/
    //this.fields$ = this.customerService.getFields(this.customer);


  }

  atLeastOneValidator = () => {
    return (controlGroup: any) => {
      let controls = controlGroup.controls;
      if (controls) {
        let theOne = Object.keys(controls).find(key => controls[key].value !== '');
        if (!theOne) {
          return {
            atLeastOneRequired: {
              text: 'At least one should be selected'
            }
          }
        }
      }
      return null;
    };
  };


  ngOnInit(): void {

  }


}
