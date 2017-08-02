import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ComponentReuseComponent } from './component-reuse.component';
import { ComponentReuseRoutes } from './component-reuse.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentReuseRoutes),
    SharedModule
  ],
  declarations: [
    ComponentReuseComponent
  ]
})
export class ComponentReuseModule { }
