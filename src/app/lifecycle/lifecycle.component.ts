import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { flyIn } from '../animations/fly-in'

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.less'],
  animations: [ flyIn ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
