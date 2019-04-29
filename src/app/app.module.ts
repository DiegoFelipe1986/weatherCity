import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// =======================
// Import Components
// =======================
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// =======================
// Import Services
// =======================
import { WeaterService } from './services/weater.service';
import { CityComponent } from './components/city/city.component';


import {APP_ROUTING} from './app.routes';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CityComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    WeaterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
