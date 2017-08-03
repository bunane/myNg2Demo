import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CommonDirectivesComponent } from './common-directives.component';
import { commonDirectivesRoutes } from './common-directives.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(commonDirectivesRoutes),
    HttpModule
  ],
  declarations: [
    CommonDirectivesComponent
  ]
})
export class CommonDirectivesModule { }
