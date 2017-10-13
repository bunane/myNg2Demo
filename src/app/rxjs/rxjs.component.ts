import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
// import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'app-rxjs',
	templateUrl: './rxjs.component.html',
	styleUrls: ['./rxjs.component.less']
})
export class RxjsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		//以下是Promise的写法
		let promise = new Promise(resolve => {
			setTimeout(() => {
				resolve('---promise timeout---');
			}, 2000);
		});
		promise.then(value => console.log(value));
	}


}
