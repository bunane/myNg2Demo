import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CommonDirectivesComponent } from './common-directives.component';
import { commonDirectivesRoutes } from './common-directives.routes';

import {AutoCompleteModule, TabViewModule, ButtonModule,MessagesModule,GrowlModule} from "primeng/primeng";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(commonDirectivesRoutes),
    HttpModule,
    ButtonModule
  ],
  declarations: [
    CommonDirectivesComponent
  ]
})
export class CommonDirectivesModule { }
