import { Injectable } from '@angular/core';
import { Headers, Jsonp, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Image } from './../model/image';
import { Result } from './../model/result';

@Injectable()
export class TiqavApiService {

  constructor(
    private jsonp: Jsonp,
  ) { }

  private apiEndpoint = 'http://api.tiqav.com';

  getSearch(query: string): Observable<Result[]> {
    const params = this.searchParams();
    params.set('q', query);
    return this.jsonp.get(`${this.apiEndpoint}/search.json`, { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getNewest(): Observable<Result[]> {
    const params = this.searchParams();
    return this.jsonp.get(`${this.apiEndpoint}/search/newest.json`, { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getRandom(): Observable<Result[]> {
    const params = this.searchParams();
    return this.jsonp.get(`${this.apiEndpoint}/search/random.json`, { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  getImage(id: string): Observable<Image[]> {
    const params = this.searchParams();
    return this.jsonp.get(`${this.apiEndpoint}/images/${id}.json`, { search: params })
    .map(this.extractData)
    .catch(this.handleError);
  }

  postImage(url: string, serifu: string, tags: string): Observable<string> {
    const params = this.searchParams();
    params.set('url', url);
    params.set('serifu', serifu);
    params.set('tags', tags);
    return this.jsonp.post(`${this.apiEndpoint}/images.json`, { params: params })
    .map(this.extractData)
    .catch(this.handleError);
  }

  getTag(id: string): Observable<string[]> {
    const params = this.searchParams();
    return this.jsonp.get(`${this.apiEndpoint}/images/${id}/tags.json`, { search: params })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private searchParams(): URLSearchParams {
    const _params = new URLSearchParams();
    _params.set('callback', 'JSONP_CALLBACK');
    return _params;
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
