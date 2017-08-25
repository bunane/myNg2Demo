import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.less'],
  animations: [flyIn]
})
export class CommunicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
