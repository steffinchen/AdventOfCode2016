import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Day1Component } from './day-1/day-1.component';
import { HomeComponent } from './home/home.component';
import { Day252015Component } from './day25-2015/day25-2015.component';
import { Day2Component } from './day2/day2.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'day1', component: Day1Component},
  { path: 'day2', component: Day2Component},
  { path: 'day25-2015', component: Day252015Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Day1Component,
    HomeComponent,
    Day252015Component,
    Day2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
