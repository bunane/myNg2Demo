import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrimengUiComponent } from './primeng-ui.component';
import { primengUiRoutes } from './primeng-ui.routes';

import { BreadcrumbModule, ChartModule,MenuModule,MegaMenuModule,PanelMenuModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(primengUiRoutes),
    BreadcrumbModule,
    ChartModule,
    MenuModule,
    MegaMenuModule,
    PanelMenuModule
  ],
  declarations: [
    PrimengUiComponent
  ],
  providers: [

  ],
  bootstrap: [
    
  ]
})
export class PrimengUiModule { }
