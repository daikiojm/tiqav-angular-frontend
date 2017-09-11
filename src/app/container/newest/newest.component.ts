import { Observable } from 'rxjs/Rx';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import { Headers, Jsonp, Response, URLSearchParams } from '@angular/http';

import { TiqavApiService } from './../../services/tiqav-api.service';
import { Result } from './../../model/result';
import { Image } from './../../model/image';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {
  private results: Result[] = [];
  private images: Image[] = [];

  constructor(
    private tiqavApiService: TiqavApiService,
    private http: Jsonp
  ) { }

  ngOnInit() {
    this.tiqavApiService.getNewest()
    .switchMap(
      (results) => {
        console.log(results);
        const images: Observable<Image>[] = [];
        for (const result of results) {
          images.push(this.tiqavApiService.getImage(result.id));
        }
        return Observable.forkJoin(images);
      }
    )
    .subscribe(
      data => {
        this.images = data;
        console.log(this.images);
      },
      err => {
        console.log(err);
      }
    );
  }

}
