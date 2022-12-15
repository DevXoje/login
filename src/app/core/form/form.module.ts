import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from "./form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {FieldModule} from "./field/field.module";


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FieldModule
  ],
  exports: [FormComponent]
})
export class FormModule {
}
