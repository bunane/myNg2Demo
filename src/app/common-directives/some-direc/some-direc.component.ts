import { Component, OnInit } from '@angular/core';
import { DataClass } from '../model/get-data.model'
// http
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Component({
  selector: 'app-some-direc',
  templateUrl: './some-direc.component.html',
  styleUrls: ['./some-direc.component.less']
})
export class SomeDirecComponent implements OnInit {

  public title: string = '各种指令语法';
  public isShow: boolean = true;
  public data: Array<DataClass>;
  public mapStatus: string = '状态一';

  public addClass: {};
  public canSave: boolean = true;
  public isUnchanged: boolean = true;
  public isSpecial: boolean = true;

  public addStyle: {};

  public ngmodelClass: any = {
    name: "默认的内容"
  }

  public currentTime:Date = new Date;

  constructor(
    private http: Http
  ) {
    setInterval(() => {
      this.currentTime = new Date;
    },1000)
  }

  ngOnInit() {
    this.getData();


  }

  public controlShow(): void {
    this.isShow = !this.isShow;
  }
  public changeMapStatus(): void {
    this.mapStatus = '状态二';
  }
  public setClass(): void {
    this.addClass = {
      'saveable': this.canSave,
      'unchanged': this.isUnchanged,
      'special': this.isSpecial
    }
  }
  public setStyle(): void {
    this.addStyle = {
      'color': this.canSave ? 'red' : 'blue',
      'font-size': this.isUnchanged ? '18px' : '16px',
      'text-decoration': this.isSpecial ? 'line-through' : 'none'
    }
  }
  public getData(url: string = './assets/json/items.json') {
    return this.http.get(url)
      .toPromise()
      .then((response) => {
        const res = response.json();
        this.data = res.items;
        return res;
      });
  }

}
