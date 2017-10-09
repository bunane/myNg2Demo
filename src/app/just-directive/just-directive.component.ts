import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-just-directive',
  templateUrl: './just-directive.component.html',
  styleUrls: ['./just-directive.component.less'],
  animations: [ flyIn ]
})
export class JustDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
