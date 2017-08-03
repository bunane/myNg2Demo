import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-common-directives',
  templateUrl: './common-directives.component.html',
  styleUrls: ['./common-directives.component.less'],
  animations: [ flyIn ]
})
export class CommonDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
