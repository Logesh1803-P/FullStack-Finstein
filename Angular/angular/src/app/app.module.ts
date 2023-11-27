import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App1Component } from './app1/app1.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './service.service';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { CRUDComponent } from './crud/crud.component';
import { StudentComponent } from './student/student.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { MenuModule } from 'primeng/menu';
import { CRUDDBComponent } from './cruddb/cruddb.component';


@NgModule({
  declarations: [
    AppComponent,
    App1Component,
    FormComponent,
    CRUDComponent,
    StudentComponent,
    BootstrapComponent,
    CRUDDBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MenuModule 
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
