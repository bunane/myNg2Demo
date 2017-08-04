import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module'
//第三方
import {AutoCompleteModule, TabViewModule, ButtonModule} from "primeng/primeng"

import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InjectionServiceComponent } from './injection-service/injection-service.component';
import { rootRouterConfig } from './app.routes';


let rootRouterModule: ModuleWithProviders = RouterModule.forRoot(rootRouterConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InjectionServiceComponent,
  ],
  imports: [
    BrowserModule,
    rootRouterModule,
    BrowserAnimationsModule,
    SharedModule,
    AutoCompleteModule,
    ButtonModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
