import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgxMaterialize} from '@Smip/ngx-materialize';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaterialize
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
