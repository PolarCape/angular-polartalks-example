import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { ChapterDetailsComponent } from './chapter-details/chapter-details.component';
import { SimpleRouteComponent } from './simple-route/simple-route.component';
import { RouteWithParamComponent } from './route-with-param/route-with-param.component';
import { GuardedRouteComponent } from './guarded-route/guarded-route.component';

import { SimpleGuard } from './simple.guard';

const appRoutes: Routes = [
  { path: '' , component: LandingComponent },
  { path: 'simple-route', component: SimpleRouteComponent },
  { path: 'route-with-param/:someText', component: RouteWithParamComponent },
  { path: 'guarded-route', component: GuardedRouteComponent, canActivate: [SimpleGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    ChapterDetailsComponent,
    SimpleRouteComponent,
    RouteWithParamComponent,
    GuardedRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SimpleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
