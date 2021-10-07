import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { MainPageModule } from './main-page/main-page.module';
import { SecondaryPagesModule } from './secondary-pages/secondary-pages.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MainPageModule,
    HomeModule,
    SecondaryPagesModule,
    FormsModule,
    ReactiveFormsModule,
    ErrorsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
