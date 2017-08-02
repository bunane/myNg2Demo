import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {

  alertFn(){
    alert("调用了demo.service")
  }

  constructor() { }

}
