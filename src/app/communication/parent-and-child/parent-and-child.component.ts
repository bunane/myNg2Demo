import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
// import { ChildComponent } from './child/child.component';


@Component({
  selector: 'app-parent-and-child',
  templateUrl: './parent-and-child.component.html',
  styleUrls: ['./parent-and-child.component.less']
})
export class ParentAndChildComponent implements OnInit {
  // @ViewChild(ChildComponent)
  // private childComponent = ChildComponent;

  constructor() { }

  ngOnInit() {
  }

  public doSomething():void{
    alert("父组件方法");
  }

}
