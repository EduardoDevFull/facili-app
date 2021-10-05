import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    HomeComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    SignUpComponent,
    SignInComponent
  ]
})
export class HomeModule {

}
