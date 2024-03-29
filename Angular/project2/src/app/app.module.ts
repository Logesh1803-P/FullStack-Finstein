import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import {ReactiveFormComponent} from '../app/reactive-form/reactive-form.component';
import { FigmaComponent } from './figma/figma.component'





@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    FigmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
