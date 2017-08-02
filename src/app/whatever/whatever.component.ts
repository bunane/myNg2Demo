import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
  selector: 'app-whatever',
  templateUrl: './whatever.component.html',
  styleUrls: ['./whatever.component.less'],
  animations: [flyIn]
})
export class WhateverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // let a: string = 'wadsjk';
    // console.log(a.search('k'));
    // console.log(a.split('d'));
    let a = {
        user:"哈哈哈哈",
        fn:function(){
            console.log(this.user); //哈哈哈哈
        }
    }
    
    let b = a.fn;
    b.call(a);
  }

  doclick(){
    alert("whatever组件的alert");
  }


  

}
