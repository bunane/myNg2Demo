import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
/**
 * 事件总线服务
 */
@Injectable()
export class EventBusService {
  public eventBus:Subject<string> = new Subject<string>();

  constructor() { }

}
