import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesModule } from './clientes/clientes.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { MainPageModule } from './main-page/main-page.module';
import { SecondaryPagesModule } from './secondary-pages/secondary-pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MainPageModule,
    ClientesModule,
    HomeModule,
    SecondaryPagesModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
