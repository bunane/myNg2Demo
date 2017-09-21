import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-child-content',
  templateUrl: './content-child-content.component.html',
  styleUrls: ['./content-child-content.component.css']
})
export class ContentChildContentComponent implements OnInit {

  @Output()
  public clickEvent :EventEmitter<string> = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  public clickFn():void {
    this.clickEvent.emit("派发事件...")
  }

}
