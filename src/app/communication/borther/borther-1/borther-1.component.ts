import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'app-borther-1',
  templateUrl: './borther-1.component.html',
  styleUrls: ['./borther-1.component.css']
})
export class Borther1Component implements OnInit {

  constructor(
    public eventBusService:EventBusService
  ) { 
    
   }

  ngOnInit() {
  }
  public startEventBus():void{
    this.eventBusService.eventBus.next("兄弟组件1触发的事件");
  }
}
