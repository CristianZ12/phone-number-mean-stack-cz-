import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'phone',
    component: PhoneNumberComponent
  },
  {
    path: 'phoneForm',
    component: PhoneFormComponent
  },
  {
    path: 'phoneForm/:id',
    component: PhoneFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
