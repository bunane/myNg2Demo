import { Component, OnInit, Input } from '@angular/core';
import { flyIn } from '../animations/fly-in';
import { DemoService } from '../shared/services/demo.service';


@Component({
  selector: 'app-injection-service',
  templateUrl: './injection-service.component.html',
  styleUrls: ['./injection-service.component.less'],
  providers: [DemoService],
  animations: [flyIn]
})
export class InjectionServiceComponent implements OnInit {

  constructor(
    private _demoService: DemoService
  ) { 
    
  }

  ngOnInit() {
  }

  useService(){
    let text = this._demoService.alertFn();
  }

}
