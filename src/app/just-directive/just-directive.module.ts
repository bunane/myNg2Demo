import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { JustDirectiveComponent } from './just-directive.component';
import { justDirectiveRoutes } from './just-directive.routes';
import { HighLightDirective } from './directive/high-light.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(justDirectiveRoutes)
  ],
  declarations: [JustDirectiveComponent, HighLightDirective]
})
export class JustDirectiveModule { }
