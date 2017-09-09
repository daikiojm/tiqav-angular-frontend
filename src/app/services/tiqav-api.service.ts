import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Image } from './../model/image';
import { Result } from './../model/result';

@Injectable()
export class TiqavApiService {

  constructor(
    private http: Http,
  ) { }

  private apiEndpoint = 'http://api.tiqav.com';

  getSearch(): Observable<Result[]> {
    return this.http.get(`${this.apiEndpoint}/search/search.json`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNewest(): Observable<Result[]> {
    return this.http.get(`${this.apiEndpoint}/newest/search.json`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getRandom(): Observable<Result[]> {
    return this.http.get(`${this.apiEndpoint}/newest/random.json`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getImage(): Observable<Image[]> {
    return this.http.get(`${this.apiEndpoint}/images.json`)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body;
  }

  private handleError(error: Response | any) {
    console.log(error.message || error);
    return Observable.throw(error.message || error);
  }
}
