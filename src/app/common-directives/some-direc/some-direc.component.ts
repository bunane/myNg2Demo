import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-some-direc',
  templateUrl: './some-direc.component.html',
  styleUrls: ['./some-direc.component.less']
})
export class SomeDirecComponent implements OnInit {

  public title: string = '各种指令语法';
  public isShow: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public controlShow():void{
    this.isShow = !this.isShow;
  }

}
