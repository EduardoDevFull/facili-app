import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OmbudsmanComponent } from './ombudsman/ombudsman.component';
import { OrderRegistrationComponent } from './order-registration/order-registration.component';

@NgModule({
  declarations: [
    OrderRegistrationComponent,
    OmbudsmanComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SecondaryPagesModule {

}
