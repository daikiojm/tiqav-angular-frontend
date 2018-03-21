import { Injectable } from '@angular/core';
import { Headers, Jsonp, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Image } from './../model/image';

@Injectable()
export class TiqavApiService {
  constructor(private jsonp: Jsonp) {}

  getSearch(query: string): Observable<Image[]> {
    const params = this.searchParams();
    params.set('q', query);
    return this.jsonp
      .get(`${environment.endpoint}/search.json`, { search: params })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getNewest(): Observable<Image[]> {
    const params = this.searchParams();
    return this.jsonp
      .get(`${environment.endpoint}/search/newest.json`, { search: params })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getRandom(): Observable<Image[]> {
    const params = this.searchParams();
    return this.jsonp
      .get(`${environment.endpoint}/search/random.json`, { search: params })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getImage(id: string): Observable<Image> {
    const params = this.searchParams();
    return this.jsonp
      .get(`${environment.endpoint}/images/${id}.json`, { search: params })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  postImage(url: string, serifu: string, tags: string): Observable<string> {
    const params = this.searchParams();
    params.set('url', url);
    params.set('serifu', serifu);
    params.set('tags', tags);
    return this.jsonp
      .post(`${environment.endpoint}/images.json`, { params: params })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getTag(id: string): Observable<string[]> {
    const params = this.searchParams();
    return this.jsonp
      .get(`${environment.endpoint}/images/${id}/tags.json`, { search: params })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getTags(query: string): Observable<string[]> {
    const params = this.searchParams();
    params.set('q', query);
    return this.jsonp
      .get(`${environment.endpoint}/tags.json`, { search: params })
      .pipe(
        map(this.extractData),
        catchError(this.handleError)
      );
  }

  getImageUrl(id: string, ext: string): string {
    return `${environment.imageURL}/${id}.${ext}`;
  }

  getThumbnailUrl(id: string, ext: string): string {
    return `${environment.imageURL}/${id}.th.${ext}`;
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
