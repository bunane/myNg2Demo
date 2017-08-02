import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WhateverComponent } from './whatever.component';
import { whateverRoutes } from './whatever.routes';
import { DemoTestComponent } from './demo-test/demo-test.component';
import { TimingComponent } from './timing/timing.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(whateverRoutes),
    SharedModule
  ],
  declarations: [
    WhateverComponent,
    DemoTestComponent,
    TimingComponent
  ]
})
export class WhateverModule { }
