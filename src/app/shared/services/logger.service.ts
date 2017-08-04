import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  consoleStart: boolean = true;

  constructor() { }

  /**
   * 日志
   * 
   * @param {*} log 
   * 
   * @memberof LoggerService
   */

  log(log: any, obj?): void {
    if (this.consoleStart)
      obj ? console.log(log, obj) : console.log(log);
  }

  warn(warn: any): void{
    if(this.consoleStart)
      console.warn(warn)
  }

  error(error: any): void{
    if(this.consoleStart)
      console.error(error)

  }

}
