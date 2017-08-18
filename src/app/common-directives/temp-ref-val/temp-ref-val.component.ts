import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref-val',
  templateUrl: './temp-ref-val.component.html',
  styleUrls: ['./temp-ref-val.component.less']
})
export class TempRefValComponent implements OnInit {

  public title:string = '模板内的局部变量、各种绑定';
  public imgSrc:string = './assets/imgs/bz1.jpg';
  public fontSizePx:number = 14;

  constructor() { }

  ngOnInit() {
  }
  public sayHello(name):void{
    alert(name)
  }
  public changeImg():void{
    if(Math.ceil(Math.random()*10)%2){
      this.imgSrc = './assets/imgs/bz2.jpg';
    }else{
      this.imgSrc = './assets/imgs/bz3.jpg';
    }
  }
  public eventFn(e):void{
    console.log(e);
    alert("事件绑定！")
  }

}
