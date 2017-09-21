import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-child',

  templateUrl: './dynamic-child.component.html',
  styleUrls: ['./dynamic-child.component.less']
})
export class DynamicChildComponent implements OnInit {

  @Output()
  btnClick:EventEmitter<string> = new EventEmitter<string>(); 

  public title: string = "动态添加的子组件的默认标题"

  constructor() { }

  ngOnInit() {
  }

  public triggerEvent():void{
    this.btnClick.emit("子组件点击带来的参数")
  }

}
