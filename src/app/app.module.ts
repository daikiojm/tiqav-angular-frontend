import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { JsonpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './container/search/search.component';
import { NewestComponent } from './container/newest/newest.component';
import { RandomComponent } from './container/random/random.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TiqavApiService } from './services/tiqav-api.service';
import { ImagesComponent } from './shared/images/images.component';
import { DefaultImageDirective } from './directives/default-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NewestComponent,
    RandomComponent,
    HeaderComponent,
    FooterComponent,
    ImagesComponent,
    DefaultImageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    JsonpModule,
    FlexLayoutModule
  ],
  providers: [
    TiqavApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
