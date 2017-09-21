import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom',
  encapsulation: ViewEncapsulation.Native,//ShadowDom模式
  templateUrl: './shadow-dom.component.html',
  styleUrls: ['./shadow-dom.component.less']
})
export class ShadowDomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
