import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FieldComponent} from "./components/field.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FieldComponent]
})
export class FieldModule {
}
