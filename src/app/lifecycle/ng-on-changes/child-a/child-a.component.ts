import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent implements OnInit {

  @Input()
  public userName: string = "";
  @Input()
  public userObj: any = {};

  public age: number = 23;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes,null,4))
  } 

  ngDoCheck(): void {
    console.log("ChildA ngDoCheck..." + new Date());
  }

}
