import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { ReviewModuleComponent } from './review-module.component';
import { reviewModuleRoutes } from './review-module.routes';
import { UserlistComponent } from './userlist/userlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderService } from './orderlist/order-services/order.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(reviewModuleRoutes)
  ],
  declarations: [ReviewModuleComponent, UserlistComponent, OrderlistComponent],
  providers: [
    OrderService
  ]
})
export class ReviewModuleModule { }
