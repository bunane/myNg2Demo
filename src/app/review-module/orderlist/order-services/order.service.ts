import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor() { }

  public getOrderList():Array<any>{
    return [
      {id:'123',name:'名字',orderName:'商品名称',money:'价格'},
      {id:'123',name:'名字',orderName:'商品名称',money:'价格'},
      {id:'123',name:'名字',orderName:'商品名称',money:'价格'},
      {id:'123',name:'名字',orderName:'商品名称',money:'价格'},
      {id:'123',name:'名字',orderName:'商品名称',money:'价格'},
      {id:'123',name:'名字',orderName:'商品名称',money:'价格'},
      {id:'123',name:'名字',orderName:'商品名称',money:'价格'},
      {id:'123',name:'名字',orderName:'商品名称',money:'价格'},
      {id:'123',name:'名字',orderName:'商品名称',money:'价格'},
    ]
  }
}
