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
    // this.tiqavApiService.getSearch('ちくわ')
    // .subscribe(
    //   data => {
    //     console.log(data);
    //     this.results = data;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    this.http.get('http://api.tiqav.com/search/newest.json?callback=JSONP_CALLBACK').map((res: Response) => {
      this.results = res.json();
      return this.results;
    })
    .flatMap((result) => this.http.get(`http://api.tiqav.com/images/${result[0].id}.json?callback=JSONP_CALLBACK`))
    .map((res: Response) => res.json())
    .subscribe(
      res => {
        this.images.push(res);
        console.log(this.images);
      }
    );

  }

}
