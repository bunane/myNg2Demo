import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LifecycleComponent } from './lifecycle.component';
import { lifecycleRoutes } from './lifecycle.routes';
import { ShowAllComponent } from './show-all/show-all.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lifecycleRoutes)
  ],
  declarations: [
    LifecycleComponent,
    ShowAllComponent
  ]
})
export class LifecycleModule { }
