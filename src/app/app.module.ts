import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdoptFilterNavComponent } from './adopt-filter-nav/adopt-filter-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdoptionResultsComponent } from './adoption-results/adoption-results.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    AdoptFilterNavComponent,
    NavbarComponent,
    AdoptionResultsComponent,
    AboutComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
