import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-params',
  templateUrl: './router-params.component.html',
  styleUrls: ['./router-params.component.less']
})
export class RouterParamsComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {

  }
  public backHome():void{
    // this.router.navigateByUrl('home');
    this.router.navigate(["home"],{queryParams:{userId:1,userName:'bunan'}})
  }

}
