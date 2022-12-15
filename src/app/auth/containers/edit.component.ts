import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
//import {Store} from '@ngxs/store';
//import {UpdateUser} from "../state";
import {Observable} from 'rxjs';
import {Field} from "../../core/form/field/models/field";
import {FieldControlService} from "../../core/form/field/services/field-control.service";
import {RegisterData} from "../models/auth.model";
//import {Customer} from "../../customer/domain/customer.model";

@Component({
	selector: 'app-register',
	template: `
		<app-form-user [title]="'Edit User'" (sendPayload)="editHandler($event)">

		</app-form-user>
	`,
})
export class EditComponent implements OnInit {
	fields$?: Observable<Field<any>[]>;
	id?: number;
	//customer?: Customer;

	constructor(
		fieldService: FieldControlService,
		//private store: Store,
		private router: Router,
		private route: ActivatedRoute
	) {
	}


	ngOnInit(): void {


	}

	editHandler(event: RegisterData) {
		/*this.store.dispatch(new UpdateUser(event)).subscribe({
			next: (response) => console.log(response),
			error: (error) => console.error(error),
		});*/
		//this.authService.mockAuth('customer');//MOCK
		//const savedToken = this.authService.checkToken();
		//this.authService.checkRole(savedToken);
	}
}
