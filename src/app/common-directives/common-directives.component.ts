import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flyIn } from '../animations/fly-in';
// http
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

// import { ContactService } from './services/contact.service';

@Component({
	selector: 'app-common-directives',
	templateUrl: './common-directives.component.html',
	styleUrls: ['./common-directives.component.less'],
	// providers: [ContactService],
	animations: [flyIn]
})
export class CommonDirectivesComponent implements OnInit {

	public data = new dataClass;

	constructor(
		private http: Http,
		// public infos: ContactService
	) { }

	ngOnInit() {
		this.getData()
	}

	
    public getData(url:string = './assets/json/test.json') {
        return this.http.get(url)
            .toPromise()
            .then((response) => {
                const res = response.json();
                this.data = res;
                return res;
            });
    }
	
	
}
export class dataClass{
	id: number;
	name: string;
	text: string;
}






		// console.log("------这里开始对比Promise和Observable，这块代码是为了学习Observable使用的------");

		// 以下是Promise的写法
		// let promise = new Promise(resolve => {
		// 	setTimeout(() => {
		// 		resolve('---promise timeout---');
		// 	}, 2000);
		// });
		// promise.then(value => console.log(value));

		// 以下是Observable的写法
		// let stream1$ = new Observable(observer => {
		// 	let timeout = setTimeout(() => {
		// 		observer.next('observable timeout');
		// 	}, 2000);

		// 	return () => {
		// 		clearTimeout(timeout);
		// 	}
		// });
		// let disposable = stream1$.subscribe(value => console.log(value));

		// 【第一个核心不同点来了】：Observable是可以中途取消的，而Promise一旦触发就不能取消了
		// setTimeout(() => {
		//     disposable.unsubscribe();
		// }, 1000);

		// 【第二个核心不同点来了】：Observable可以持续发射很多值，而Promise只能发射一个值就结束了
		// let stream2$ = new Observable(observer => {
		//     let count = 0;
		//     let interval = setInterval(() => {
		//         observer.next(count++);
		//     }, 1000);

		//     return () => {
		//         clearInterval(interval);
		//     }
		// });
		// stream2$.subscribe(value => console.log(value));

		// 【第三个核心不同点来了】：Observable提供了很多的工具函数，最最最常用的filter和map演示如下
		// stream2$
		//   .filter(value => value % 2 == 0)
		//   .subscribe(value => console.log(value));

		// stream2$
		//   .map(value => value * value)
		//   .subscribe(value => console.log(value));


		// console.log("------------------------------------------------");