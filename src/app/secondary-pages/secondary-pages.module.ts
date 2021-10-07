import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OmbudsmanComponent } from './ombudsman/ombudsman.component';
import { OrderRegistrationComponent } from './order-registration/order-registration.component';
import { SecondaryPagesComponent } from './secondary-pages.component';

@NgModule({
  declarations: [
    SecondaryPagesComponent,
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
