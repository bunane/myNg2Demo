import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../service/event-bus.service';

@Component({
  selector: 'app-borther-2',
  templateUrl: './borther-2.component.html',
  styleUrls: ['./borther-2.component.less']
})
export class Borther2Component implements OnInit {

  public events:Array<any> = [];

  constructor(
    public eventBusService:EventBusService
  ) {

  }

  ngOnInit() {
    this.eventBusService.eventBus.subscribe((value)=>{
      this.events.push(value+"," + new Date());
    });
  }



}
