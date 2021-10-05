import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmbudsmanComponent } from './clientes/ombudsman/ombudsman.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'ombudsman',
    component: OmbudsmanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
