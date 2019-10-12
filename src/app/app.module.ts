import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyLoaderService } from './lazy-loader.service';
import { LAZY_WIDGETS } from './tokens';
import { lazyArrayToObj } from './lazy-widgets';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LazyLoaderService, { provide: LAZY_WIDGETS, useFactory: lazyArrayToObj }],
  bootstrap: [AppComponent]
})
export class AppModule { }
