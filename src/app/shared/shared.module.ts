import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReuseComponent } from './reuse/reuse.component';

import {AutoCompleteModule, TabViewModule, ButtonModule,MessagesModule,GrowlModule} from "primeng/primeng";

@NgModule({
  imports: [
    CommonModule,
    
    AutoCompleteModule,
    TabViewModule,
    ButtonModule,
    MessagesModule,
    GrowlModule
  ],
  exports:[
    ReuseComponent
  ],
  //声明
  declarations: [
    ReuseComponent
  ]
})
export class SharedModule { }
