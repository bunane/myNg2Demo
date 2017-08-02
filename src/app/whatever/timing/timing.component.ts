import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timing',
  templateUrl: './timing.component.html',
  styleUrls: ['./timing.component.less']
})
export class TimingComponent implements OnInit {
  public currentTime: Date = new Date();

  constructor() { 
    window.setInterval(()=>this.currentTime = new Date(),1000);
  }

  ngOnInit() {
  }

}
