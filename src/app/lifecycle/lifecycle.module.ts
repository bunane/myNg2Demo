import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LifecycleComponent } from './lifecycle.component';
import { lifecycleRoutes } from './lifecycle.routes';
import { ShowAllComponent } from './show-all/show-all.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';
import { ChildAComponent } from './ng-on-changes/child-a/child-a.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lifecycleRoutes),
    FormsModule
  ],
  declarations: [
    LifecycleComponent,
    ShowAllComponent,
    NgOnChangesComponent,
    ChildAComponent
  ]
})
export class LifecycleModule { }
