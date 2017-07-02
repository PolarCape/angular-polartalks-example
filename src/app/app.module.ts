import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';
import { ChapterDetailsComponent } from './chapter-details/chapter-details.component';
import { LocalStateManagementComponent } from './local-state-management/local-state-management.component';
import { CounterComponent } from './counter/counter.component';
import { ResultsComponent } from './results/results.component';
import { DisplayFullNameComponent } from './display-full-name/display-full-name.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'local', component: LocalStateManagementComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'results', component: ResultsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    ChapterDetailsComponent,
    LocalStateManagementComponent,
    CounterComponent,
    ResultsComponent,
    DisplayFullNameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
