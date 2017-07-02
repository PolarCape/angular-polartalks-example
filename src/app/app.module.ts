import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RoutingComponent } from './routing/routing.component';
import { SimpleRouteComponent } from './simple-route/simple-route.component';

const appRoutes: Routes = [
  { path: 'simple-route', component: SimpleRouteComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RoutingComponent,
    SimpleRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
