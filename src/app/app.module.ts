import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { JsonpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './container/search/search.component';
import { NewestComponent } from './container/newest/newest.component';
import { RandomComponent } from './container/random/random.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TiqavApiService } from './services/tiqav-api.service';
import { ImagesComponent } from './shared/images/images.component';
import { SearchFormComponent } from './shared/search-form/search-form.component';
import { ImagesDialogComponent } from './shared/images-dialog/images-dialog.component';
import { ImagesInfoComponent } from './shared/images-info/images-info.component';
import { ImagesRelatedComponent } from './shared/images-related/images-related.component';
import { TagsComponent } from './shared/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NewestComponent,
    RandomComponent,
    HeaderComponent,
    FooterComponent,
    ImagesComponent,
    SearchFormComponent,
    ImagesDialogComponent,
    ImagesInfoComponent,
    ImagesRelatedComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    JsonpModule,
    FlexLayoutModule,
    LazyLoadImageModule,
    ClipboardModule
  ],
  providers: [
    TiqavApiService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ImagesDialogComponent
  ]
})
export class AppModule { }
