import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated-mode',
  encapsulation: ViewEncapsulation.Emulated,//angular默认的方式，模拟shadowDom，封装css作用域
  templateUrl: './emulated-mode.component.html',
  styleUrls: ['./emulated-mode.component.less']
})
export class EmulatedModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
