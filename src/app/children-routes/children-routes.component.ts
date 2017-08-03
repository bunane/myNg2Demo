import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/primeng';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-children-routes',
  templateUrl: './children-routes.component.html',
  styleUrls: ['./children-routes.component.less'],
  animations:[flyIn]
})
export class ChildrenRoutesComponent implements OnInit {
  clickNum: number = 0;

  constructor() { }

  ngOnInit() {
  }

  msgs: Message[];

  clickBtn() {
    this.clickNum++;
  }

  handleChange(e) {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'你点击了选项卡', detail: '第' + e.index + '个'});

  }
}
    // msgs: Message[];
    
    // onTabChange(event) {
    //     this.msgs = [];
    //     this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    // }