import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in'

@Component({
  selector: 'app-review-module',
  templateUrl: './review-module.component.html',
  styleUrls: ['./review-module.component.less'],
  animations: [ flyIn ]

})
export class ReviewModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
