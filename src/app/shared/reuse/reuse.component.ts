import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-reuse',
  templateUrl: './reuse.component.html',
  styleUrls: ['./reuse.component.less']
})
export class ReuseComponent implements OnInit {

  @Input()
  public myName: string;

  @Output()
  public reuseClick = new EventEmitter<string>();

  constructor() {
    //console.log("组件构造前：",this.myName)
  }

  ngOnInit() {
    //console.log("组件构造前：",this.myName)
  }

  public doclick(){
    this.reuseClick.emit("reuseClick")
  }

}
