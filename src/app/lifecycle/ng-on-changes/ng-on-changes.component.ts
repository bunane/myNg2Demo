import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-on-changes',
  templateUrl: './ng-on-changes.component.html',
  styleUrls: ['./ng-on-changes.component.css']
})
export class NgOnChangesComponent implements OnInit {

  public userName:string = "用户名1";

  public userObj:any = {
    userName:"用户名2"
  }

  constructor() { }

  ngOnInit() {
  }

}
