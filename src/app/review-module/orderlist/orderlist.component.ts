import { Component, OnInit } from '@angular/core';
import { OrderService } from './order-services/order.service'

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.less']
})
export class OrderlistComponent implements OnInit {

  public orderList:Array<any>;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderList = this.orderService.getOrderList();
  }

}
