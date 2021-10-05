import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OmbudsmanComponent } from './ombudsman/ombudsman.component';

@NgModule({
  declarations: [
    OmbudsmanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    OmbudsmanComponent
  ]
})
export class ClientesModule {

}
