import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
//import 'hammerjs/hammer';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { Pipe, PipeTransform } from '@angular/core';
import { KeysPipe } from './keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    JsonpModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDVugjLJqZ4Hrtl2xrFQfw6O10T3VgY-s0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
