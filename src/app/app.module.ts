import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgxMaterialize} from '@Smip/ngx-materialize';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ParallaxComponent} from './parallax/parallax.component';
import {MainComponent} from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialize,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
