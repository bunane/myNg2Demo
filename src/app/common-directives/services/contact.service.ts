
import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs';
@Injectable()
export class ContactService {
    constructor(
        private http: Http,
        
        ) { }


    getData(url:string = './assets/json/test.json') {
        return this.http.get(url)
            .toPromise()
            .then((response) => {
                const res = response.json();
                
                return res;
            });
    }
}
