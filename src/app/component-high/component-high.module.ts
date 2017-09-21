import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentHighComponent } from './component-high.component';
import { componentHighRoutes } from './component-high.routes';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';
import { EmulatedModeComponent } from './emulated-mode/emulated-mode.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ContentChildComponent } from './ng-content/content-child/content-child.component';
import { ContentChildContentComponent } from './ng-content/content-child-content/content-child-content.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(componentHighRoutes)
  ],
  declarations: [
    ComponentHighComponent,
    DynamicChildComponent,
    ShadowDomComponent,
    EmulatedModeComponent,
    NgContentComponent,
    ContentChildComponent,
    ContentChildContentComponent
  ],
  entryComponents: [
    DynamicChildComponent
  ]
})
export class ComponentHighModule { }
