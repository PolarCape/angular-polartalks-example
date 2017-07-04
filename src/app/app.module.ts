import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { ValidationComponent } from './validation/validation.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    ValidationComponent,
    ReactiveValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
