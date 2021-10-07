import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderRegistrationComponent } from './order-registration/order-registration.component';
import { SecondaryPagesComponent } from './secondary-pages.component';

@NgModule({
  declarations: [
    SecondaryPagesComponent,
    OrderRegistrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SecondaryPagesModule {

}
