import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { HttpModule } from '@angular/http';
import { TiqavApiService } from './services/tiqav-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './container/search/search.component';
import { NewestComponent } from './container/newest/newest.component';
import { RandomComponent } from './container/random/random.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NewestComponent,
    RandomComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpModule,
    TiqavApiService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
