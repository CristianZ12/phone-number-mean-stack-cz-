import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationAppComponent } from './components/navigation-app/navigation-app.component';
import { HomeComponent } from './components/home/home.component';
import { PhoneNumberComponent } from './components/phone-number/phone-number.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneServicesService } from './services/phone-services.service';
import { PhoneFormComponent } from './components/phone-form/phone-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationAppComponent,
    HomeComponent,
    PhoneNumberComponent,
    PhoneFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PhoneServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
