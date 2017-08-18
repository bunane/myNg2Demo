import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CommonDirectivesComponent } from './common-directives.component';
import { commonDirectivesRoutes } from './common-directives.routes';

import {AutoCompleteModule, TabViewModule, ButtonModule, MessagesModule, GrowlModule, PanelModule } from 'primeng/primeng';
import { TempRefValComponent } from './temp-ref-val/temp-ref-val.component';
import { FontResizerComponent } from './temp-ref-val/font-resizer/font-resizer.component';
import { SomeDirecComponent } from './some-direc/some-direc.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(commonDirectivesRoutes),
    HttpModule,
    ButtonModule,
    PanelModule
  ],
  declarations: [
    CommonDirectivesComponent,
    TempRefValComponent,
    FontResizerComponent,
    SomeDirecComponent
  ]
})
export class CommonDirectivesModule { }
