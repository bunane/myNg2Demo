import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    flyIn
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params)=>{
      if(params.userId){
        console.log(params);
      }
      
    })
  }

  doclick(){
    alert("home组件的alert")
  }
}
