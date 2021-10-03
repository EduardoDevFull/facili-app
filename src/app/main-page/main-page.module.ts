import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page.component';
import { HeaderComponent } from './header/header.component';
import { PageContentComponent } from './page-content/page-content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    PageContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class MainPageModule {

}
