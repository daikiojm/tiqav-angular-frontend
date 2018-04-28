import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Image } from './../model/image';

@Injectable()
export class TiqavApiService {
  constructor(private http: HttpClient) {}

  getSearch(query: string): Observable<Image[]> {
    const params: HttpParams = new HttpParams().set('q', query);
    const options = { params: params };
    return this.requestJsonp(`${environment.endpoint}/search.json`, options).pipe(catchError(this.handleError));
  }

  getNewest(): Observable<Image[]> {
    const params: HttpParams = new HttpParams();
    const options = { params: params };
    return this.requestJsonp<Image[]>(`${environment.endpoint}/search/newest.json`, options).pipe(catchError(this.handleError));
  }

  getRandom(): Observable<Image[]> {
    const params: HttpParams = new HttpParams();
    const options = { params: params };
    return this.requestJsonp<Image[]>(`${environment.endpoint}/search/random.json`, options).pipe(catchError(this.handleError));
  }

  getImage(id: string): Observable<Image> {
    const params: HttpParams = new HttpParams();
    const options = { params: params };
    return this.requestJsonp<Image[]>(`${environment.endpoint}/images/${id}.json`, options).pipe(catchError(this.handleError));
  }

  postImage(url: string, serifu: string, tags: string): Observable<string> {
    const params: HttpParams = new HttpParams()
      .set('url', url)
      .set('serifu', serifu)
      .set('tags', tags);
    const options = { params: params };
    return this.requestJsonp<string>(`${environment.endpoint}/images.json`, options).pipe(catchError(this.handleError));
  }

  getTag(id: string): Observable<string[]> {
    const params: HttpParams = new HttpParams();
    const options = { params: params };
    return this.requestJsonp<string[]>(`${environment.endpoint}/images/${id}/tags.json`, options).pipe(catchError(this.handleError));
  }

  getTags(query: string): Observable<string[]> {
    const params: HttpParams = new HttpParams().set('q', query);
    const options = { params: params };
    return this.requestJsonp<string[]>(`${environment.endpoint}/tags.json`, options).pipe(catchError(this.handleError));
  }

  getImageUrl(id: string, ext: string): string {
    return `${environment.imageURL}/${id}.${ext}`;
  }

  getThumbnailUrl(id: string, ext: string): string {
    return `${environment.imageURL}/${id}.th.${ext}`;
  }

  private requestJsonp<T>(url, options, callback = 'callback'): Observable<T> {
    // options.params is an HttpParams object
    const params = options ? options.params.toString() : '';
    return this.http.jsonp<T>(`${url}?${params}`, callback);
  }

  /* tslint:disable no-any */
  private handleError(error: Response | any) {
    console.log(error.message || error);
    return Observable.throw(error.message || error);
  }
}
