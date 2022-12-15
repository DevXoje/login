import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormModule} from "./form/form.module";
import {FormComponent} from "./form/form.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormModule
  ],
  exports: [FormComponent]
})
export class CoreModule {
}
