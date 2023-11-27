import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgxUiLoaderModule,NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION, NgxUiLoaderComponent } from 'ngx-ui-loader';
// import { NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';

// ...
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenceComponent } from './expence/expence.component';
import { HttpClientModule } from '@angular/common/http';
import { ExpenceService } from './expence.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HeaderComponent } from './header/header.component';
import { ScrollerModule } from 'primeng/scroller';
import { AdduserformComponent } from './adduserform/adduserform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextarea, InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { ModelformComponent } from './modelform/modelform.component';
import { CalendarModule } from 'primeng/calendar';
import { SidebarModule } from 'primeng/sidebar';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
// import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';


// const ngxUiLoaderConfig: NgxUiLoaderConfig = {
//   "bgsColor": "#00ACC1",
//   "bgsOpacity": 0.5,
//   "bgsPosition": POSITION.bottomCenter,
//   "bgsSize": 60,
//   "bgsType": SPINNER.chasingDots,
//   "pbColor": "#00ACC1",
//   "pbDirection": PB_DIRECTION.leftToRight,
//   "pbThickness": 5,
//   "hasProgressBar": true,
//   "text": "Loading...",
//   "textColor": "#FFFFFF",
//   "textPosition": POSITION.centerCenter,
//   "maxTime": -1,
//   "minTime": 300
// };


const ngx: NgxUiLoaderConfig = {
  "bgsColor": "red",
  "bgsOpacity": 0.5,
  "bgsPosition": "bottom-right",
  "bgsSize": 60,
  "bgsType": "ball-spin-clockwise",
  "blur": 9,
  "delay": 0,
  "fastFadeOut": true,
  "fgsColor": "#32043c",
  "fgsPosition": "center-center",
  "fgsSize": 80,
  "fgsType": "square-jelly-box",
  "gap": 24,
  "logoPosition": "center-center",
  "logoSize": 90,
  // "logoUrl": "assets/images/cash.svg",
  "masterLoaderId": "master",
  "overlayBorderRadius": "0",
  "overlayColor": "rgba(40, 40, 40, 0.8)",
  "pbColor": "red",
  "pbDirection": "ltr",
  "pbThickness": 3,
  "hasProgressBar": true,
  "text": "",
  "textColor": "#FFFFFF",
  "textPosition": "center-center",
  "maxTime": -1,
  "minTime": 1000
}

@NgModule({


  declarations: [
    AppComponent,
    ExpenceComponent,
    HeaderComponent,
    AdduserformComponent,
    ModelformComponent
    
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
   
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    ScrollerModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    SidebarModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxUiLoaderModule.forRoot(ngx),
    ToastModule, 
    DialogModule

  ],
  providers: [ExpenceService,MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
