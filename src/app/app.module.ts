import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { ValidationComponent } from './validation/validation.component';
import { ReactiveValidationComponent } from './reactive-validation/reactive-validation.component';

import { routes } from './app.routes';

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
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
