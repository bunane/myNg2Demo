import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsComponent } from './rxjs.component';
import { RouterModule } from '@angular/router'
import { rxjsRoutes } from './rxjs.routes'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rxjsRoutes)
  ],
  declarations: [RxjsComponent]
})
export class RxjsModule { }
