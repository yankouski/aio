import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoansComponent } from './simulator/loans/loans.component';

const appRoutes: Routes = [
  {path: '',  component: HomepageComponent},
  {path: 'loans',  component: LoansComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    LoansComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
