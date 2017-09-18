import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ls-child2',
  templateUrl: './ls-child2.component.html',
  styleUrls: ['./ls-child2.component.css']
})
export class LsChild2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public read():void{
    let json = window.localStorage.getItem("json");
    let obj = JSON.parse(json);
    console.log(obj.name);
    console.log(obj.age);
  }

}
