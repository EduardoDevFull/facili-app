import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmbudsmanComponent } from './clientes/ombudsman/ombudsman.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OrderRegistrationComponent } from './secondary-pages/order-registration/order-registration.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'ombudsman',
    component: OmbudsmanComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'signIn',
    component: SignInComponent
  },
  {
    path: 'registration',
    component: OrderRegistrationComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
