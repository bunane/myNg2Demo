import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-component-reuse',
  templateUrl: './component-reuse.component.html',
  styleUrls: ['./component-reuse.component.less'],
  animations: [flyIn]
})
export class ComponentReuseComponent implements OnInit {

  public myName: string = "component-reuse";

  constructor() { }

  ngOnInit() {
  }


  doclick(){
    alert("component-reuse组件的alert")
  }

}
