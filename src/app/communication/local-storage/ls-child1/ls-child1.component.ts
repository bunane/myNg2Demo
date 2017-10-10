import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ls-child1',
  templateUrl: './ls-child1.component.html',
  styleUrls: ['./ls-child1.component.less']
})
export class LsChild1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public write():void{
    window.localStorage.setItem("json",JSON.stringify({name:'卜楠',age:23}))
  }
}
