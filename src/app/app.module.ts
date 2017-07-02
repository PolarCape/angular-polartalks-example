import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LifecycleRenderingComponent } from './lifecycle-rendering/lifecycle-rendering.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LifecycleRenderingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
