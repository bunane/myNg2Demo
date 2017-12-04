import { Component, OnInit } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Constant } from '../constant';
@Component({
  selector: 'app-test-express',
  templateUrl: './test-express.component.html',
  styleUrls: ['./test-express.component.less']
})
export class TestExpressComponent implements OnInit {

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    // console.log(Constant.serveIP + Constant.api.getUserInfo + '?id=1')

    let params = new URLSearchParams();
    params.set('id', '1');
    console.log(params.toString());
    this.http.get('http://192.168.10.226:3000/users/getUserInfo', { search: params }).subscribe(res=>{
      console.log(res)
    });

    // this.http.post(url, params).subscribe(res => {
    //   console.log(res);
    // });
  }

}
